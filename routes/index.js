
/*
 * GET home page.
 */

var Leanpub = require('leanpub-client'),
    settings = require('../settings'),
    leanpub = new Leanpub(settings.leanpub_key);

exports.index = function(req, res){
    leanpub.sales({slug: settings.leanpub_slug, report: 'summary'},
                  function (err, summary) {
                      console.log(summary);
                      res.render('index', 
                                 {happy_readers: summary.num_happy_readers});
                  });
};
