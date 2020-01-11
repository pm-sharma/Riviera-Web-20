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
    './assets/images/stage.jpg',
    './assets/images/proshow2.jpg',
    './assets/images/sports.jpg',
    './assets/images/sportscover.jpg',
    './assets/images/sportstile.jpg',
    './assets/images/stage-guy.jpg',
    './assets/icons/facebook.svg',
    './assets/icons/magnifier.svg',
    './assets/icons/pepsi.png',
    './assets/icons/proshows.svg',
    './assets/icons/sports.svg',
    './assets/icons/twitter.svg',
    './assets/icons/vit-white.png',
    './assets/icons/youtube.svg',
    './assets/sponsors/viacom.png',
    './assets/sponsors/tvf-min.png',
    './assets/sponsors/tata-gluco.png',
    './assets/sponsors/talent.jpg',
    './assets/sponsors/silly-monks.png',
    './assets/sponsors/paytm.png',
    './assets/sponsors/one-plus.png',
    './assets/sponsors/Nestle.svg',
    './assets/sponsors/Maruti-Suzuki-Logo-2019.jpg',
    './assets/sponsors/jet-airways-logo.png',
    './assets/sponsors/Internshala_company_logo.png',
    './assets/sponsors/Hitachi.png',
    './assets/sponsors/Ferns_N_Petals_Logo-min.jpg',
    './assets/sponsors/cloud-clothing.png',
    './assets/sponsors/aviation-express-min.jpeg',
    './assets/sponsors/asian-paints-logo.png',
    './assets/images/back1.jpeg',
    './assets/images/back2.jpeg',
    './assets/images/back3.jpeg',
    './assets/vit-img/team/avp.jpg',
    './assets/vit-img/team/vp.jpg',
    './assets/vit-img/team/CV Sudheer.JPG',
    './assets/vit-img/team/viswanathan.jpg',
    './assets/vit-img/team/Sharmila.JPG',
    './assets/vit-img/team/selvam.jpg',
    './assets/vit-img/team/provc1-min.jpg',
    './assets/vit-img/team/SAMUEL1-min.jpg',
    './assets/vit-img/team/Raghuram-min.JPG',
    './assets/vit-img/team/Ramesh(1)-min.JPG',
    './assets/proshows/sid.jpg',
    './assets/proshows/zakir.jpg',
    './assets/organisers/ADNAAN KHAN.jpg',
    './assets/organisers/Anirudh Varma.jpg',
    './assets/organisers/Arushi Goel.jpg',
    './assets/organisers/Aswath M.jpg',
    './assets/organisers/C V A N Sai Teja.jpg',
    './assets/organisers/GOPAVARAM MEGHANA.jpg',
    './assets/organisers/HARIOM HUDIYA.jpeg',
    './assets/organisers/HARSH KISHORE.jpg',
    './assets/organisers/HIMANSHU.jpg',
    './assets/organisers/ITHA ARAVINDA KOUSIK.jpg',
    './assets/organisers/K T Gopalan.jpg',
    './assets/organisers/Kusumitha S.jpg',
    './assets/organisers/Namisha Mehta.jpg',
    './assets/organisers/Neeraja Nair.jpg',
    './assets/organisers/NIPUN MALIK.jpg',
    './assets/organisers/Nitya Bhargava.jpg',
    './assets/organisers/PGS ADITYA.jpeg',
    './assets/organisers/PIYUSH GUPTA.jpg',
    './assets/organisers/Ruthvik Bhupati.jpg',
    './assets/organisers/Sarthak Dilawari.jpg',
    './assets/organisers/SHRINKHLA.jpg',
    './assets/organisers/Shubham Kumar.jpg',
    './assets/organisers/Siddhesh Kubal.JPG',
    './assets/organisers/Soumyamitra-agarwal.jpg',
    './assets/organisers/Srikanth Parvatam.jpg',
    './assets/organisers/SUNNY KUMAR.jpg',
    './assets/organisers/SWAPNIL KUMAR.jpg',
    './assets/organisers/Vaibhav Jha.jpg',
    './assets/organisers/VARUN GARG.jpg',
    './assets/organisers/Vineet Vashi.jpg',
    './assets/organisers/VISHAL RAUTELA.jpg',


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