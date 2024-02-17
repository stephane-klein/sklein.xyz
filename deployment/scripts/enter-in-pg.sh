#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

pgcli $POSTGRES_URL
