self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('mercys-calc-v5').then((cache) => {
            return cache.addAll(['index.html', 'style.css', 'script.js', 'manifest.json', 'icon.png', 'pop.mp3']);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});