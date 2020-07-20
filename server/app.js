const http = require('http');
const url= require('url');

const hostname = '127.0.0.1';
const port = 3000;

const serve = http.createServer((req, res) =>{
    let pathName = url.parse(req.url).pathname;
    if(pathName === '/'){
        res.statusCode =200;
        res.setHeader('Content-Type', 'text-plain');
        res.end('Hello world Guille\n');
    }

    if(pathName === '/about'){
        res.statusCode =200;
        res.setHeader('Content-Type', 'text-plain');
        res.end('About\n');
    }

    if(pathName === '/contact'){
        res.statusCode =200;
        res.setHeader('Content-Type', 'text-plain');
        res.end('CONTACT\n');
    }

    res.statusCode = 400;
    res.setHeader('Content-Type', 'text-plain'); //Si lo dejo va a mostrar el error una vez
    res.end('ERROR');

   
});

serve.listen(port,hostname,()=>{
    console.log(`Servidor levanta sobre el http://${hostname}:${port}/`);
});