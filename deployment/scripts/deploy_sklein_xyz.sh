#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

gomplate -f _deploy_sklein_xyz.sh | ssh root@perier.servers.stephane-klein.info 'bash -s'
