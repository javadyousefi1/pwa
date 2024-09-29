if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).then((res) => {
        console.log("serviceWorkder lunched", res)
    }).catch(err => {
        console.log("serviceWorker crashed", err)
    })
}