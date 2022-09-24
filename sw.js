self.addEventListener('install',(event) =>{
    console.log("Instalado");
    /*
    const myPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Instalaciones Finalizadas");
        },3000);
    });
    event.waitUntil(myPromise);
    */
});

self.addEventListener('activate',(event) =>{
    console.log("SW Activado.");
})

self.addEventListener('fetch',(event) => {
    if(event.request.url.includes('imagen1')){
        event.respondWith(fetch('images/imagen2.png'));
    }
});

/*
self.addEventListener('fetch',(event) => {
    const resp = event.request.url;
    fetch(event.request.url.then((resp) =>{
        console.log(resp);
        if(resp.ok){
            event.respondWith(resp);
        }else{
            const generic = fetch('images/image2.png');
            event.respondWith(generic);
        }
    }))
    console.log(resp);
});
*/

self.addEventListener('fetch',(event) =>{
    //console.log(event.request.url);
    if(event.request.url.includes('style.css')){
        const respuesta = new Response(
            `body{
                color: red;
                background-color: #000
            }`,
            {
                header:{
                    'Content-type':`text/css`
                }
            }
        );
        event.respondWith(respuesta);
    }
});

