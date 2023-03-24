#!/usr/bin/env bash
set -e

cd $(dirname "$0")

mkdir -p /srv/nginx-proxy/

cat <<EOF > /srv/nginx-proxy/docker-compose.yml
version: '3.8'
services:
  nginx-proxy:
    image: index.docker.io/nginxproxy/nginx-proxy:1.2.3
    restart: unless-stopped
    network_mode: "host"
    volumes:
      - conf:/etc/nginx/conf.d
      - vhost:/etc/nginx/vhost.d
      - html:/usr/share/nginx/html
      - certs:/etc/nginx/certs:ro
      - /var/run/docker.sock:/tmp/docker.sock:ro

  acme-companion:
    image: index.docker.io/nginxproxy/acme-companion:2.2.7
    restart: unless-stopped
    volumes_from:
      - nginx-proxy
    depends_on:
      - "nginx-proxy"
    environment:
      DEFAULT_EMAIL: contact@stephane-klein.info
    volumes:
      - certs:/etc/nginx/certs:rw
      - acme:/etc/acme.sh
      - /var/run/docker.sock:/var/run/docker.sock:ro

volumes:
  conf:
  vhost:
  html:
  certs:
  acme:
EOF

cd /srv/nginx-proxy/
docker-compose pull
docker-compose up -d
