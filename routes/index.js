
/*
 * GET home page.
 */

var Leanpub = require('@swizec/leanpub-client'),
    settings = require('../settings'),
    leanpub = new Leanpub(settings.leanpub_key);

var cache = {};

exports.index = function(req, res){
    var respond = function (err, summary) {
        res.render('index',
                   {happy_readers: summary.num_happy_readers});
    };


    if (!cache.time || Date.now()-cache.time > settings.cache_timeout) {
        leanpub.sales({slug: settings.leanpub_slug, report: 'summary'},
                      function (err, summary) {
                          cache.time = Date.now();
                          cache.summary = summary;

                          respond(null, summary);
                      });
    }else{
        respond(null, cache.summary);
    }
};
