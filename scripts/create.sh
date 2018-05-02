#!/bin/bash
NAME=$1
# Install and use Node.js version 8.10.
source ~/.nvm/nvm.sh
nvm install 8.10
# Check if the "services" directory exists.
if [ ! -d ./services ]; then
  # Create the "services" directory.
  mkdir services
fi
# Check if a directory with the given name already exists.
if [ ! -d ./services/$NAME ]; then
  # Copy everything from the template directory.
  cp -rf ./template ./services/$NAME
  # Copy some files again replacing "service-name" with the new service name.
  sed "s/service-name/$NAME/" ./template/serverless.yml > ./services/$NAME/serverless.yml
  sed "s/service-name/$NAME/" ./template/package.json > ./services/$NAME/package.json
  # Install all the dependencies.
  (cd ./services/$name/; npm install)
fi
