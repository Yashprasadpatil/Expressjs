// const http = require("http");
// const express = require("express");

// const app = express();

//  app.use('/', (req, res, next) => {
//      console.log('In the middleware');
//      next();
//      //res.send('<h1>hello yash from express</h1>');
//  });

//  app.use('/', (req, res, next) => {
//     console.log('In the another middleware');
// //     next();
//     res.send('<h1>hello yash from express</h1>');
// });


// const server = http.createServer(app);

// server.listen(3000);




const http = require("http");
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
    
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

 app.use('/', (req, res, next) => {
    res.send('<h1>hello yash from express</h1>');
});

const server = http.createServer(app);

server.listen(3000);
