# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

```
GIT_USER=noncheat GIT_COMMITTER_NAME=noncheat GIT_COMMITTER_EMAIL=admin@noncheat.com GIT_AUTHOR_NAME=noncheat GIT_AUTHOR_EMAIL=admin@noncheat.com USE_SSH=true npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


### Create PDF

Start Local Development

```
npm run start
npn run pdf
```