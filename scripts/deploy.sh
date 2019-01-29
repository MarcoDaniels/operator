#!/bin/bash

PROJECT_ID=${1}
TOKEN=${2}

# build application
yarn build

# install firebase tools
npm install -g firebase-tools

# deploy
firebase deploy --only functions --project "$PROJECT_ID" --token "$TOKEN"
