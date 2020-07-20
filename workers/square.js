const worker = require('worker_threads');

const {Worker , isMainThread, workerData, parentPort} = worker;

if(isMainThread){
    console.log("Este es el hilo principal");
    for(let i = 0; i<50; i++){
        const worker = new Worker(__filename, {workerData: { num : 5}});
        worker.once('message',(result)=>{
        console.log('Worker' + worker.threadId+ ' square of 5 is :', result)
    });
    }
}else{
    console.log('worker' + worker.threadId+ " Este no es el hilo principal");
    parentPort.postMessage(workerData.num * workerData.num);
}