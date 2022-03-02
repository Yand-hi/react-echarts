#!/usr/bin/env bash
rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:Yand-hi/echarts-website.git &&
git branch -M gh-pages &&
git push -u origin gh-pages -f
cd -