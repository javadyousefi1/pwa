// self for accessibility to sw
// you dont have dom access in sw
self.addEventListener("install", (e) => {
  console.log("install", e)
})

self.addEventListener("activate", (e) => {
  // must close all tabs up to activated
  // console.log("active", e)
  return self.clients.cliam()
}) 

self.addEventListener("fetch" , (e) => {
  // console.log("fetch",e)
  e.respondWith(fetch(e.request))
})