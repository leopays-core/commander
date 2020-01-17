#!/usr/bin/env bash
DIR=$(pwd)
cd $DIR/src/electron-app && yarn install --silent && \
cd $DIR/src/electron-app-old && yarn install --silent && \
cd $DIR/src/react-app && yarn install --silent && \
cd $DIR/src/express-app && yarn install --silent && exit 0
exit 1
