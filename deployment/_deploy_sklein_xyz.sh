#!/usr/bin/env bash
set -e

cd $(dirname "$0")

mkdir -p /srv/sklein_xyz/

cat <<EOF > /srv/sklein_xyz/docker-compose.yml
version: '3.8'
services:
  sklein_xyz:
    image: stephaneklein/sklein.xyz:latest
    environment:
      VIRTUAL_HOST: "sklein.xyz,stephane-klein.info,garden.stephane-klein.info"
      LETSENCRYPT_HOST: "sklein.xyz,stephane-klein.info,garden.stephane-klein.info"

  goatcounter:
    # Builder from https://github.com/tigattack/docker-goatcounter
    image: stephaneklein/goatcounter:latest
    environment:
      VIRTUAL_HOST: "gc.sklein.xyz"
      LETSENCRYPT_HOST: "gc.sklein.xyz"
      GOATCOUNTER_DOMAIN: gc.sklein.xyz
      GOATCOUNTER_EMAIL: contact@stephane-klein.info
      GOATCOUNTER_PASSWORD: {{ .Env.GOATCOUNTER_PASSWORD }}
    volumes:
    - /var/lib/gc.sklein.xyz/goatcounter/:/goatcounter/db/
EOF

cd /srv/sklein_xyz/
docker-compose pull
# docker-compose up -d
