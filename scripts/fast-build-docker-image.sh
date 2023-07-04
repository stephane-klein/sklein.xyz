#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

pnpm install
pnpm run build

docker build ./ -f Dockerfile.minimal -t stephaneklein/sklein.xyz:latest --platform linux/amd64
