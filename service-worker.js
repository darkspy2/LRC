const CACHE = 'lrc-v1';
const FILES = [
  'index.html',
  'login.html',
  'register.html',
  'dashboard.html',
  'plans.html',
  'deposit.html',
  'withdraw.html',
  'history.html',
  'referral.html',
  'profile.html',
  'admin.html',
  'style.css',
  'app.js',
  'manifest.json'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
