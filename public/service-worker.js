// Service Worker for Portfolio
const CACHE_NAME = 'portfolio-cache-v3';
const ASSETS_CACHE_NAME = 'portfolio-assets-cache-v3';

// Never cache index.html or navigation — only cache hashed assets
const assetsToCache = [];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(ASSETS_CACHE_NAME).then(cache => cache.addAll(assetsToCache))
  );
  self.skipWaiting();
});

// Security-enhanced fetch event
self.addEventListener('fetch', event => {
  // Don't handle browser-extension requests or non-GET requests
  if (
    !event.request.url.startsWith(self.location.origin) || 
    event.request.method !== 'GET'
  ) {
    return;
  }

  // Don't cache admin paths or sensitive data
  if (
    event.request.url.includes('/admin') || 
    event.request.url.includes('/api')
  ) {
    return fetch(event.request);
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(
          response => {
            // Check if valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response
            const responseToCache = response.clone();
            
            // Use different caching strategies based on resource type
            if (event.request.url.includes('/assets/')) {
              // Long-term caching for assets
              caches.open(ASSETS_CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            } else if (
              !event.request.url.includes('/_headers') && 
              !event.request.url.includes('/.htaccess') &&
              !event.request.url.includes('/httpd.conf')
            ) {
              // Don't cache sensitive configuration files
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }
              
            return response;
          }
        ).catch(error => {
          // Network failed, try to serve from cache for HTML requests
          if (event.request.url.endsWith('.html') || event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
          throw error;
        });
      })
  );
});

// Activate — wipe ALL old caches so stale JS never gets served
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(cacheNames.map(name => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});
