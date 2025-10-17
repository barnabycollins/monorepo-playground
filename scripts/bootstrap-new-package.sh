
set -e

ORGANISATION=bc-nx-test-org
REPO_URL=https://github.com/barnabycollins/monorepo-playground.git

echo "Be sure to execute this function in the root of the repository, ie with './scripts/bootstrap-new-package.sh'."

read -p "Package name [within @$ORGANISATION scope): " NAME

cd packages

mkdir $NAME

cd $NAME

echo "{
  \"name\": \"@$ORGANISATION/$NAME\",
  \"version\": \"0.0.0\",
  \"description\": \"\",
  \"type\": \"module\",
  \"main\": \"dist/index.js\",
  \"types\": \"dist/index.d.ts\",
  \"repository\": {
    \"type\": \"git\",
    \"url\": \"git+$REPO_URL\",
    \"directory\": \"packages/$NAME\"
  },
  \"scripts\": {
    \"build\": \"npx tsc\",
    \"test\": \"npx vitest run\"
  }
}
" >> package.json

npm install

npm publish --access public

mkdir src

mkdir tests

ln -s ../../tsconfig.base.json tsconfig.json

echo "Package created and published as version 0.0.0. Now go set up OIDC. 👋"

open https://www.npmjs.com/package/@$ORGANISATION/$NAME/access
