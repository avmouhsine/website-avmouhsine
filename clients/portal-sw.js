// service worker بوابة الموكلين: لا يخزّن المعطيات المشفرة، يكتفي بتمكين التثبيت
self.addEventListener('install', e=> self.skipWaiting());
self.addEventListener('activate', e=> e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e=>{});
