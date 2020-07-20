const worker = require('worker_threads');

const {Worker , isMainThread, workerData} = worker;

if(isMainThread){
    console.log("Este es el hilo principal");
    for(let i = 0; i<1; i++){
        let w = new Worker(__filename, {workerData});
    }
}else{
    console.log("Este no es el hilo principal");
}