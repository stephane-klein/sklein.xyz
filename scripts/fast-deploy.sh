#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

./scripts/fast-build-docker-image.sh

docker push stephaneklein/sklein.xyz:latest

ssh root@perier.servers.stephane-klein.info 'bash -s' << 'EOF'
    cd /srv/sklein_xyz/;
    docker-compose pull sklein_xyz
    docker-compose up -d sklein_xyz
EOF
