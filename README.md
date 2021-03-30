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
