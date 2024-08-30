#!/usr/bin/env bash
set -e

cd $(dirname "$0")

mkdir -p /srv/sklein_xyz/

cat <<EOF > /srv/sklein_xyz/docker-compose.yml
services:
  nginx:
    image: stephaneklein/nginx-sklein.xyz:latest
    restart: unless-stopped
    environment:
      VIRTUAL_HOST: "sklein.xyz,stephane-klein.info,garden.stephane-klein.info,cv.stephane-klein.info"
      LETSENCRYPT_HOST: "sklein.xyz,stephane-klein.info,garden.stephane-klein.info,cv.stephane-klein.info"
    depends_on:
      sklein_xyz:
        condition: service_healthy

  sklein_xyz:
    image: stephaneklein/sklein.xyz:latest
    restart: unless-stopped
    environment:
      PUBLIC_GOATCOUNTER_URL: "https://stats.sklein.xyz"
      GOTIFY_KEY: "{{ .Env.GOTIFY_KEY }}"
      POSTGRES_URL: "postgres://postgres:{{ .Env.POSTGRES_PASSWORD }}@postgres:5432/postgres"
    extra_hosts:
    - gotify.sklein.xyz:51.158.146.33
    depends_on:
      postgres:
        condition: service_healthy

  postgres:
    image: postgres:16
    restart: unless-stopped
    environment:
      POSTGRES_USER: postgres
      POSTGRES_DB: postgres
      POSTGRES_PASSWORD: "{{ .Env.POSTGRES_PASSWORD }}"
    ports:
      - 127.0.0.1:5490:5432
    volumes:
      - /var/lib/sklein_xyz/postgres/:/var/lib/postgresql/data/
    healthcheck:
      test: ['CMD', 'pg_isready']
      interval: 10s
      start_period: 30s

  goatcounter:
    # Builder from https://github.com/tigattack/docker-goatcounter
    image: stephaneklein/goatcounter:latest
    restart: unless-stopped
    environment:
      VIRTUAL_HOST: "stats.sklein.xyz"
      LETSENCRYPT_HOST: "stats.sklein.xyz"
      GOATCOUNTER_DOMAIN: stats.sklein.xyz
      GOATCOUNTER_EMAIL: contact@stephane-klein.info
      GOATCOUNTER_PASSWORD: {{ .Env.GOATCOUNTER_PASSWORD }}
    volumes:
    - /var/lib/gc.sklein.xyz/goatcounter/:/goatcounter/db/
EOF

cd /srv/sklein_xyz/
docker-compose pull
docker-compose up -d
