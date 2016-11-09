var express = require('express');
var config = require('../config');
var dirToJson = require('dir-to-json');
var fs = require("fs");

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
  var filename = req.query.filename;
  var stat = fs.statSync( filename );
  res.writeHeader(200, { "Content-Length" : stat.size } );
  var fReadStream = fs.createReadStream( filename );
  fReadStream.pipe( res );
});

module.exports = router;
