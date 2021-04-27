const staticDevPLC = "dev-PLC-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/pwa.css",
  "/js/index.js",
  "/images/animal.jpg",
  "/js/pwa-data.json",
  "/js/pwa.js"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevPLCtates).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
