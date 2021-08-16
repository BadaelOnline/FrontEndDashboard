#!/usr/bin/env sh

set  -e

npm run build

LOGSTRING=$(git log)
COMMIT=$(echo $LOGSTRING | awk '{print $2}')

cd dist

git init 
git add -A
git commit -m "New Deployment"
git push -f https://github.com/Programing2020/FrontEndDashboard.git master:gh-pages

cd ..
