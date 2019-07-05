#!/bin/bash

echo 'You should probably do this first:'
echo '1. Generate a new repo on github.com.'
echo '2. Clone repo to you project home dir.'
echo '3. Enter path of new repo without trailing slash: '
read PATH

# Make paths we need
/bin/mkdir -p $PATH/logs

# Copying paths
/bin/cp -Rv app $PATH/.
/bin/cp -Rv bin $PATH/.
/bin/cp -Rv lib $PATH/.
/bin/cp -Rv __tests__ $PATH/.

# Copying files
/bin/cp -v .coveralls-dist.yml $PATH/.
/bin/cp -v .eslintrc.json $PATH/.
/bin/cp -v .gitignore $PATH/.
/bin/cp -v .retireignore $PATH/.
/bin/cp -v .travis.yml $PATH/.
/bin/cp -v changelog.sh $PATH/.
/bin/cp -v CONTRIBUTING.md $PATH/.
/bin/cp -v install.sh $PATH/.
/bin/cp -v jest.config.js $PATH/.
/bin/cp -v LICENSE $PATH/.
/bin/cp -v npm-release.sh $PATH/.
/bin/cp -v package.json $PATH/.
/bin/cp -v README.md $PATH/.

cd $PATH
/bin/cp -v ./.coveralls-dist.yml ./.coveralls.yml

echo ''
echo 'Todo:'
echo '1. Update coveralls.yml with the correct token.'
echo '2. Run `npm install`'
echo '3. Run you app `./run-app.sh`.'
echo ''
echo 'All set :)'
echo ''
