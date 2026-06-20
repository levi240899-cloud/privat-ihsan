self.addEventListener('fetch', (event) => {
    // Menjawab request agar syarat PWA terpenuhi
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response("Offline");
        })
    );
});
