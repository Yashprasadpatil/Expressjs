const http = require("http");
const express = require("express");

const app = express();

 app.use('/', (req, res, next) => {
     console.log('In the middleware');
     next();
     //res.send('<h1>hello yash from express</h1>');
 });

 app.use('/', (req, res, next) => {
    console.log('In the another middleware');
//     next();
    res.send('<h1>hello yash from express</h1>');
});


const server = http.createServer(app);

server.listen(3000);




