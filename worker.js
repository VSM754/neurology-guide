self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("neurology-guide-cache").then(cache => {
      return cache.addAll([
        "/neurology-guide/",
        "/neurology-guide/index.html"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});