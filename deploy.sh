#!/bin/sh

echo "Shut down the jekyll serve command before continuing ... go ahead, we'll wait ...\n"
read -rsp $'... Press any key to continue or control-c to cancel...\n';

export JEKYLL_ENV=production

git checkout 'master'
bundle exec jekyll build
git add .
git commit -a -m "deployed new version"
git push origin 'master'

rm -rf /tmp/_site
cp -r _site /tmp/_site
git checkout 'gh-pages'
cp -r /tmp/_site/* .
git add .
git commit -a -m "deployed new version"
git push -f origin 'gh-pages'
git checkout 'master'

export JEKYLL_ENV=development
