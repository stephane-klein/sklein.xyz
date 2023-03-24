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
EOF

cd /srv/sklein_xyz/
docker-compose pull
docker-compose up -d
