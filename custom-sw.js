var db;
function createDB() {
  var request = self.indexedDB.open("sync-data", 1);
  request.onerror = function(event) {
      console.log("error: " + event);
  };
  request.onsuccess = function(event) {
      db = request.result;
      console.log("success: "+ db);
  };
}
function readDB() {
  return new Promise((resolve, reject) => {
      var request = db.transaction("data").objectStore("data").getAll();
      request.onsuccess = function(event) {
          resolve(event.target.result)
      }
      request.onerror = function(event) {
          console.log("Unable to add data ");
          reject(false)
      }
  });
}
self.addEventListener('activate', function(event) {
  event.waitUntil(
    createDB()
  );
});
self.addEventListener('sync', event => {
  if (event.tag == 'send-data') {
    event.waitUntil(
      readDB().then(result => {
        fetch('https://4ro9u5dkc7.execute-api.us-east-2.amazonaws.com/demo-pwa/sync', {
          method: 'POST',
          body: JSON.stringify(result),
          headers: { 'Content-Type': 'application/json' }
        }).then((event) => {
          console.log(event)
        }).catch(err => {
          console.log(err)
        })
      })
    )
  }
});