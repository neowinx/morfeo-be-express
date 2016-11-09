var express = require('express');
var fs = require("fs");
var path = require('path');
var dirToJson = require('dir-to-json');
var config = require('../config');

var router = express.Router();

/* GET morfeo listing. */
router.get('/', function(req, res, next) {
  dirToJson( config.morfeo.path )
      .then( function( dirTree ){
        res.send( dirTree );
      })
      .catch( function( err ){
        throw err;
      });
});

router.get('/file', function(req, res, next) {
  var filename = path.join( config.morfeo.path, req.query.filename);
  console.log('Starting download: ' + filename);
  var stream = fs.createReadStream(filename, { bufferSize: 64 * 1024 });
  stream.pipe( res );
});

module.exports = router;
