#!/bin/bash

gsed -i 's/local/production/g' ./lib/main.dart

docker buildx create --use

docker buildx build --push \
--platform linux/amd64 -f ./server/Dockerfile \
--tag tribehealth/immich_server:v0.0.1 .
