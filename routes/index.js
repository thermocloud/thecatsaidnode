var express = require('express');
var router = express.Router();

var fs = require('fs');
require('dotenv').config()

router.get('/', function (req, res, next) {

   // TODO:@chrisdias #7 Remove this for the demo
   // myPlatform = process.platform

   let inImgPath = "/images/catpaw.png";

   if (myPlatform != "linux") {
      inImgPath = "/images/catpaw.png"
   }

   res.render('index',
      {
         title: "The Cat Said No!",
         imgPath: inImgPath
      }
   );
});

module.exports = router;
