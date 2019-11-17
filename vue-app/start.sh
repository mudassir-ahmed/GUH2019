#!/bin/bash

# script to help speed things up when deploying to server

docker build . -t my-app
docker run -d -p 8080:80 my-app
curl localhost:8080
