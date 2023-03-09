var staticCacheName = "counter-pwa";
 
const INITIAL_CACHED_RESOURCES = [
  '/',
  './styles.css',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js',
  'https://unpkg.com/babel-standalone@6/babel.min.js',
  './App.js',
  './images/favicon.ico',
  './images/icon-192x192.png',
  './images/icon-512x512.png',
  './App.js',
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(INITIAL_CACHED_RESOURCES);
    })
  );
});
 
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
  console.log(caches);
  let online = navigator.onLine;
  event.respondWith(
    caches.match(event.request).then(function (response) {
      console.log(response)
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
      caches.keys().then(function(keys){
          return Promise.all(keys.map(function(key, i){
              if(key !== staticCacheName){
                  return caches.delete(keys[i]);
              }
          }))
      })
  )
});