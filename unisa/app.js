if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/serviceWorker.js");
}
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
    navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(reg => console.log("service worker resgistrered", reg))
        .catch(err => console.log("service worker not registrered", err))
    })
  }