#!/bin/bash

docker buildx create --use

docker buildx build --push \
--platform linux/amd64 -f Dockerfile \
--tag tribehealth/immich_machine_learning:v0.0.1 .
