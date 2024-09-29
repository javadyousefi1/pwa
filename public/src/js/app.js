if ("serviceWorker" in navigator) {
    // scope based on the routes your want be pwa
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).then((res) => {
        console.log("serviceWorkder lunched", res)
    }).catch(err => {
        console.log("serviceWorker crashed", err)
    })
}