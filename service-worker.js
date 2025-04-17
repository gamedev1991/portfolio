// Service Worker for Portfolio
const CACHE_NAME = 'portfolio-cache-v1';
const ASSETS_CACHE_NAME = 'portfolio-assets-cache-v1';

// Define different cache strategies for different types of resources
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

const assetsToCache = [
  '/assets/index-h7Xa29CT.css',
  '/assets/index-DBDLGZwl.js',
  '/assets/vendor-B3U6yQ0Z.js'
];

// Security-focused installation
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      // Cache core app shell
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('Opened core cache');
          return cache.addAll(urlsToCache);
        }),
      // Cache assets separately with different strategy
      caches.open(ASSETS_CACHE_NAME)
        .then(cache => {
          console.log('Opened assets cache');
          return cache.addAll(assetsToCache);
        })
    ])
  );
  // Force immediate activation
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

// Activate event - clean up old caches securely
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME, ASSETS_CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Claim clients so the service worker is in control immediately
      return self.clients.claim();
    })
  );
});
