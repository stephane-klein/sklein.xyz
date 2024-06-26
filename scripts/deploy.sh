#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

./scripts/build-docker-image.sh

docker push stephaneklein/sklein.xyz:latest

ssh root@triton.servers.stephane-klein.info 'bash -s' << 'EOF'
    cd /srv/sklein_xyz/;
    docker-compose pull sklein_xyz
    docker-compose up -d sklein_xyz
EOF
