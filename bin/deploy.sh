#!/bin/bash

set -eu

DIRECTORY=frontend/dist
USER=odan
EMAIL=odan3240@gmail.com
REPOSITORY=git@github.com:odanado/ethereum-message-sandbox.git
BRANCH=gh-pages

DIST_DIR=$(dirname $0)/../${DIRECTORY}

cd $DIST_DIR
echo $(pwd)

git init .
git config --local user.name ${USER}
git config --local user.email ${EMAIL}

git checkout -b ${BRANCH}
git add ./
git commit -m 'Update [ci skip]'
git push -f ${REPOSITORY} ${BRANCH}
