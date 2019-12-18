var filesToCache = [
    '/',
    './index.html',
    './css/index.css',
    './css/event.css',
    './css/proshows.css',
    './script/index.js',
    './view/ambassador.html',
    './view/events.html',
    './view/infusion.html',
    './view/proshow.html',
    './view/sponsors.html',
    './view/teamriviera.html',
    './assets/images/mainbg.png',
    './assets/icons/facebook.svg',
    './assets/icons/magnifier.svg',
    './assets/icons/pepsi.png',
    './assets/icons/proshows.svg',
    './assets/icons/sports.svg',
    './assets/icons/twitter.svg',
    './assets/icons/vit-white.png',
    './assets/icons/youtube.svg'
  ];
  
  self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
      caches.open('riviera2k20').then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
      })                                                                                                                                                                                                                    
    );
  });
  self.addEventListener('activate',  event => {
    event.waitUntil(self.clients.claim());
  });
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request, {ignoreSearch:true}).then(response => {
        return response || fetch(event.request);
      })
    );
  });