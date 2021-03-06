// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://cra.link/PWA

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://cra.link/PWA'
          );
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  let installingWorker;
  // Documentation: https://deanhume.com/displaying-a-new-version-available-progressive-web-app

  handleUpdate();

  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      console.log('[Registering SW]: ', registration);
      if (registration.waiting && registration.waiting.state === 'installed') {
        // The service worker is installed and we just need to activate it
        // Case handled by the settings page update interface
        // Uncomment the following line to force an update
        // registration.waiting.skipWaiting();
      }

      registration.onupdatefound = () => {
        installingWorker = registration.installing;
        if (installingWorker === null) {
          return;
        }

        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, we know there is a new version ready
              // Uncomment the following line to force an update
              // navigator.serviceWorker.skipWaiting();
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
    });
}

async function handleUpdate() {
  if ('serviceWorker' in navigator) {
    let refreshing;

    // https://dev.to/thepassle/on-pwa-update-patterns-4fgm
    // check to see if there is a current active service worker
    const oldRegistration = await navigator.serviceWorker.getRegistration();
    const oldSw = oldRegistration && oldRegistration.active;
    const olsSwState = oldSw && oldSw.state;

    navigator.serviceWorker.addEventListener('controllerchange', async () => {
      if (refreshing) return;

      // when the controllerchange event has fired, we get the new service worker
      const newRegistration = await navigator.serviceWorker.getRegistration();
      const newSw = newRegistration && newRegistration.active;
      const newSwState = newSw && newSw.state;

      // if there was already an old activated service worker, and a new activating service worker, do the reload
      if (olsSwState === 'activated' && newSwState === 'activating') {
        refreshing = true;
        window.location.reload();
      }
    });
  }
}

//////////////////
// LOCAL ENV ONLY!
//////////////////

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log('No internet connection found. App is running in offline mode.');
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
