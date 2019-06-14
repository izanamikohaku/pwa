self.addEventListener('sync', function(event) {
  if (event.tag == 'myFirstSync') {
    self.registration.showNotification("Data was sync");
  }
});