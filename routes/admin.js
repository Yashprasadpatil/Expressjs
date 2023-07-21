const express = require("express");
const path=require('path')
const router = express.Router();
const rootDir = require('../util/path');

router.get("/add-product", (req, res, next) => {
  // res.send(
  //   '<form action="/product" method="post"><input type="text" name="title"><button type=sumbit> Add Product </form>'
  //  );
   res.sendFile(path.join(rootDir,'views','add-product.html'))
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;