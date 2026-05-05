const CACHE_NAME = "saanvi-neurology-cache-v1";
const urlsToCache = [
  "index.html",
  "high-school.html",
  "timeline.html",
  "immigration-comparison.html",
  "immigration-education.html",
  "eamcet-registration.html",
  "neet-registration.html",
  "eamcet-vs-neet.html",
  "us-premed-vs-mbbs.html",
  "mbbs-to-usa-neurology.html",
  "resources.html",
  "icon-192.png",
  "icon-512.png"
];

// Install SW
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});