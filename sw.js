const CACHE_NAME = 'olayiwola-v1';

// A list of all your files that the phone should save for offline use
const urlsToCache = [
  '/',
  '/index.html',
  '/login.html',
  '/dashboard.html',
  '/forgot.html',
  '/style.css',
  '/olayiwola-logo.png'
];

// Step 1: Install the service worker and cache the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Step 2: Serve the cached files when the app is opened
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return the cached file if found, otherwise fetch from the internet
        return response || fetch(event.request);
      })
  );
});