// var dataCacheName = 'my-app-data-v1';
// self.addEventListener('fetch', function(e) {
//   console.log('[ServiceWorker] Fetch', e.request.url);
//   var dataUrl = 'execute-api.us-east-2.amazonaws.com';
//   // trường hợp request lên địa chỉ api
//   if (e.request.url.indexOf(dataUrl) > -1) {
//     if(e.request.method === 'GET') {
//         e.respondWith(
//           // lấy dữ liệu mới nhất về, cache lại, và trả về cho người dùng
//           caches.open(dataCacheName).then(function(cache) {
//             return fetch(e.request).then(function(response) {
//               cache.put('list-data', response.clone());
//               return response;
//             }).catch(err => {
//               return cache.match('list-data').then(response => {
//                 return response;
//               })
//             });
//           })
//       );
//     } else if(e.request.method === 'POST') {
//       return fetch(e.request).catch(err => {
//         return fetch(e.request);
//       });
//     } else {
//         return fetch(e.request);
//     }
//   }
//   else {
//     // ... còn không thì trả về cached asset files
//     e.respondWith(
//         caches.match(e.request).then(function(response) {
//           return response || fetch(e.request);
//         })
//     );
//   }
// });
self.addEventListener('sync', event => {
  if (event.tag == 'send-data') {
    console.log('111111111111111111111')
    // var db;
    // var request = self.indexedDB.open("sync-data", 1);
    // request.onsuccess = function(event) {
    //   db = request.result;
    //   console.log("success: "+ db);
    // };
    // var objectStore = db.transaction("data").objectStore("data");
    // if(objectStore){
    //   objectStore.openCursor().onsuccess = event => {
    //     var cursor = event.target.result;
    //     if (cursor) {
    //       console.log(cursor);
    //       cursor.continue();
    //     }
    //   }
    // }
    // event.waitUntil(
    //   fetch('https://4ro9u5dkc7.execute-api.us-east-2.amazonaws.com/demo-pwa/sync', {
    //       method: 'POST',
    //       body: self.localStorage.getItem('offlineRequest'),
    //       headers: { 'Content-Type': 'application/json' }
    //   }).then(() => {
    //     localStorage.removeItem('offlineRequest');
    //   })
    // );
  }
});