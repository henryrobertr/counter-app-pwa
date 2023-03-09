var staticCacheName = "counter-pwa";
 
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(["./"]);
    })
  );
});
 
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
  let online = navigator.onLine;
  event.respondWith(
    caches.match(event.request).then(function (response) {
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