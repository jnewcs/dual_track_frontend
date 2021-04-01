# dual_track_frontend
Frontend React app for DualTrack service. It is deployed on [GitHub Pages and uses React Router](https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/).

## Service Worker
In production (i.e. deployed to Github Pages), we use a service worker to emulate a more native experience. We cache assets for an offline experience and show an update banner to the user when a new version has been deployed.

## Deployment
If we want to deploy from the local command line, we have to run the following command to deploy this to GitHub Pages:

```
npm run deploy
```

Otherwise, we can rely on our Github action script [.github/workflows/deploy.yml](.github/workflows/deploy.yml) whenever we merge into the default Github branch.

## Local API Testing
We don't want to always be running our API server locally. To get around this, we are using [a server called MirageJS](https://miragejs.com/api/classes/model/) to mock the server and the responses. It does require more work to mock the server, but it should make development more stable.

## Problems
When installing node modules for the first time in WSL2, I had to force clear the npm cache using this command:

```
npm cache clear --force
```

## Dependencies
We are using a few libraries to make our lives easier:

1. To make HTTP requests (GET, POST, etc.), we are using [superagent](https://www.npmjs.com/package/superagent)
