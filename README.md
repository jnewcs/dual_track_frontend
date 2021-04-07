# dual_track_frontend
Frontend React app for DualTrack service. It is deployed on [GitHub Pages and uses React Router](https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/).

## Start Server Locally
To run the app with HTTPS enable, we can do the following:

```
HTTPS=true npm start
```

## Service Worker
In production (i.e. deployed to Github Pages), we use a service worker to emulate a more native experience. We cache assets for an offline experience and show an update banner to the user when a new version has been deployed.

It is really hard to test the service worker locally. Since deploying is pretty easy, we usually deploy and then test in production.

## Deployment
If we want to deploy from the local command line, we have to run the following command to deploy this to GitHub Pages:

```
npm run deploy
```

Otherwise, we can rely on our Github action script [.github/workflows/deploy.yml](.github/workflows/deploy.yml) whenever we merge into the default Github branch.

## Local API Testing
We don't want to always be running our API server locally. To get around this, we are using [a server called MirageJS](https://miragejs.com/api/classes/model/) to mock the server and the responses. It does require more work to mock the server, but it should make development more stable.

## Running in Production Mode Locally
To fully test some features (like app bundling), it is necessary to run in production mode locally. To do so, follow [this guide](https://create-react-app.dev/docs/deployment#static-server):

```
<!-- Remove the homepage attribute from the package.json then follow these steps -->
npm run build

npm install -g serve
serve -s build
```

## Testing Pusher
To test our chat functionality locally, we need to run our Rails backend (https://github.com/jnewcs/dual_track) server locally on port 4000:

```
bundle exec rails server:4000
```

We have to do this because are using [Pusher JS](https://github.com/pusher/pusher-js) to create websockets. To maintain security, we are using private channels which require a server (https://github.com/jnewcs/dual_track) to authorize the initial websocket connection.

## Problems
When installing node modules for the first time in WSL2, I had to force clear the npm cache using this command:

```
npm cache clear --force
```

## Useful Resources
We are using a few libraries to make our lives easier:

1. To make HTTP requests (GET, POST, etc.), we are using [superagent](https://www.npmjs.com/package/superagent)

2. To learn how to make a JS stopwatch, I followed [this article on Medium](https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-2/).

3. To keep our app open while in workout mode, we followed [this Google help article](https://web.dev/wake-lock/).
    * We have to be running the app in HTTPS mode locally to get this capability.

4. If you GIT gets stuck in a weird state (i.e. corrupt loose object), you can run the following commands:

    ```
    find .git/objects/ -size 0 -exec rm -f {} \;
    git fetch origin
    ```

    * Found this answer in this [StackOverflow article](https://stackoverflow.com/questions/4254389/git-corrupt-loose-object).
