const CACHE_NAME = 'my-cache-v1';

// Install Service Worker
self.addEventListener('install', event => {
  // Pre-cache some essential assets (HTML, CSS, JS)
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        '/', // root page
        '/index.html',
        '/models/avatar.glb',
        '/models/avatar-holo.glb'
      ]);
    })
  );
});

// Activate the Service Worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName); // Delete old cache
          }
        })
      );
    })
  );
});

// Fetch event to cache external models and other assets dynamically
self.addEventListener('fetch', event => {
  const request = event.request;

  // Check if the request is for a 3D model (e.g., GLB, GLTF, OBJ files)
  if (request.url.match(/\.glb$|\.gltf$|\.obj$/)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(request).then(response => {
          // If the model is already cached, serve it
          if (response) {
            return response;
          }

          // If not cached, fetch it and cache the new model
          return fetch(request).then(networkResponse => {
            if (networkResponse.ok) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
  } else {
    // For other requests (CSS, JS, etc.), use the cached version if available
    event.respondWith(
      caches.match(request).then(response => {
        return response || fetch(request);
      })
    );
  }
});
