var express = require('express');
var router = express.Router();

var fs = require('fs');
require('dotenv').config()

router.get('/', function (req, res, next) {

   // Dogs rule Cats drool
   let inImgPath = "/images/dogpaw.png"; 

   res.render('index',
      {
         title: "The dog Said No!",
         imgPath: inImgPath
      }
   );
});

module.exports = router;
