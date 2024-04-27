#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

ssh -L 5490:127.0.0.1:5490 triton
