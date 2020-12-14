# operator

![Build Status](https://github.com/marcodaniels/operator/workflows/On%20Master/badge.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/MarcoDaniels/operator/badge.svg?branch=master)](https://coveralls.io/github/MarcoDaniels/operator?branch=master)

> _GraphQL Server API for some [marcodaniels](https://marcodaniels.com/) consumer applications_

## Documentation

This GraphQL server exposes a [Playground](https://us-central1-web-verse-services.cloudfunctions.net/operator/graphql) interface.

## Development

This project runs in a [firebase functions emulator](https://firebase.google.com/docs/functions/local-emulator).

install dependencies

```
yarn install
```

setup .firebaserc

```
{
  "projects": {
    {project-name}: {project-identifier}
  }
}

```

run development firebase function

```
yarn serve
```

navigate to http://localhost:5000/operator/graphql
