const CACHE_NAME = 'kyushu-trip-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
  // 如果您有把 icon 圖片放進去，請在這裡也加入 './icon-192.png', './icon-512.png'
];

// 安裝 Service Worker 並快取資源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

// 攔截網路請求：有快取就用快取，沒快取才上網
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果快取有，直接回傳快取 (離線可用)
        if (response) {
          return response;
        }
        // 如果快取沒有，就去網路抓
        return fetch(event.request);
      })
  );
});

// 清除舊的快取 (當您更新版本時)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
});