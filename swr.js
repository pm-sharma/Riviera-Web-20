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
    './assets/proshows/benny.jpg',
    './assets/proshows/shreya-ghoshal.jpg',
    './assets/proshows/ola ras.jpg',
    './assets/organisers/adnaan_khan.jpg',
    './assets/organisers/anirudh_varma.jpg',
    './assets/organisers/Arushi Goel.jpg',
    './assets/organisers/aswath_m.jpg',
    './assets/organisers/C V A N Sai Teja.jpg',
    './assets/organisers/gopavaram_meghana.jpg',
    './assets/organisers/hariom_hudeya.jpg',
    './assets/organisers/harsh_kishore.jpg',
    './assets/organisers/himanshu.jpg',
    './assets/organisers/itha_aravinda_kousik.jpg',
    './assets/organisers/K T Gopalan.jpg',
    './assets/organisers/Kusumitha S.jpg',
    './assets/organisers/Namisha Mehta.jpg',
    './assets/organisers/neeraja_nair.jpg',
    './assets/organisers/nipun_malik.jpg',
    './assets/organisers/Nitya Bhargava.jpg',
    './assets/organisers/pgs_aditya.jpg',
    './assets/organisers/piyush_gupta.jpg',
    './assets/organisers/Ruthvik Bhupati.jpg',
    './assets/organisers/Sarthak Dilawari.jpg',
    './assets/organisers/shrinkhla.jpg',
    './assets/organisers/Shubham Kumar.jpg',
    './assets/organisers/siddhesh_kubal.jpg',
    './assets/organisers/Soumyamitra-agarwal.jpg',
    './assets/organisers/Srikanth Parvatam.jpg',
    './assets/organisers/sunny_kumar.jpg',
    './assets/organisers/swapnil_kumar.jpg',
    './assets/organisers/Vaibhav Jha.jpg',
    './assets/organisers/varun_garg.jpg',
    './assets/organisers/vineet_vashi.jpg',
    './assets/organisers/vishal_rautela.jpg',
  ];
  
  self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
      caches.open('riviera2k20').then(cache => {
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