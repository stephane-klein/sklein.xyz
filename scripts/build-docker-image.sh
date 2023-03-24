#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

docker build ./ -f Dockerfile -t stephaneklein/sklein.xyz:latest --platform linux/amd64
