#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

docker build ./ -f Dockerfile.nginx -t stephaneklein/nginx-sklein.xyz:latest --platform linux/amd64
