
/*
 * GET home page.
 */

var Leanpub = require('leanpub-client'),
    settings = require('../settings');



exports.index = function(req, res){
  res.render('index', {  });
};
