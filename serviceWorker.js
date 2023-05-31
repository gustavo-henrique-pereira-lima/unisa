const staticUnisa = "Universidade-santo-agostinho"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/imagens/textoEstudante.jpg",
  "/imagens/capelo.png",
  "/imagens/check-box.png",
  "/imagens/escrita-nota.png",
  "/imagens/lapis.png",
  "/imagens/ok.png",
  "/imagens/suporte-online.png",
]
self.addEventListener("install", event => {
    console.log("Service worker installed");
 });
 self.addEventListener("activate", event => {
    console.log("Service worker activated");
 });
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticUnisa).then(cache => {
            cache.addAll(assets)
        })
    )
})
