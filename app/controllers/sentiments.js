
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var sentiment = mongoose.model('sentiment');
var utils = require('../../lib/utils');
var extend = require('util')._extend;
var router = express.Router();
var methodOverride = require('method-overrride');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))


/**
 * Load
 */

router.route('/').get(function(req, res, next) {
    // mongo에서 모든 article 가져오기
    mongoose.model('article').find({}, function (err, articles) {
        if (err) {
            return console.error(err);
        } else {
            res.render('index.jade', {
                title: 'Blog',
                articles: articles
            });
        }
    })
})


