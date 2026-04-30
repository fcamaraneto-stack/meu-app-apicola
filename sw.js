'use strict';

var CACHE_NAME = 'apicola-cache-v1';

/* Recursos locais para pré-cache na instalação */
var PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

/* Instalação: pré-cacheia recursos locais */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('[SW] Pré-cacheando recursos locais');
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

/* Ativação: limpa caches antigos */
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) {
              console.log('[SW] Removendo cache antigo:', key);
              return caches.delete(key);
            })
      );
    })
  );
  self.clients.claim();
});

/* Fetch: cache-first para local, network-first para CDN */
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;

  var url;
  try {
    url = new URL(event.request.url);
  } catch(e) {
    return;
  }

  var isLocal = url.origin === self.location.origin;

  if (isLocal) {
    /* Cache-first: recursos locais servidos do cache, atualizados em background */
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        var fetchPromise = fetch(event.request).then(function(networkResponse) {
          if (networkResponse && networkResponse.ok) {
            var clone = networkResponse.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, clone);
            });
          }
          return networkResponse;
        }).catch(function() {
          return cached;
        });
        return cached || fetchPromise;
      })
    );
  } else {
    /* Network-first: CDN (Leaflet, html2canvas, jsPDF, fontes, tiles) */
    event.respondWith(
      fetch(event.request).then(function(response) {
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(function() {
        return caches.match(event.request);
      })
    );
  }
});
