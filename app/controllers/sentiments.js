
/**
 * Module dependencies.
 */
var express = require('express');
var mongoose = require('mongoose');
var Sentiment = mongoose.model('Sentiment');
var sentimenter = require('sentiment')
var utils = require('../../lib/utils');
var extend = require('util')._extend;
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var sentiments = require('../controllers/sentiments');

//router.use(bodyParser.urlencoded({ extended: true }))
//router.use(methodOverride(function(req, res){
//    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//        // look in urlencoded POST bodies and delete it
//        var method = req.body._method;
//        delete req.body._method;
//        return method;
//    }
//}))


// Error handler

var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};


/**
 * save
 */

exports.create = function(req, res) {
    console.log(req.body);
    var sentiment = new Sentiment(req.body);
    //sentiment.user = req.user;
    sentiment.sentimentValue = sentimenter(req.body.sentiment).score;
    console.log(sentiment);
    sentiment.save(function(err) {
        console.log("eh?")
        if (err) {
            console.log("error");
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            console.log('created new sentiment analysis');
            res.format({
                html: function() {
                    res.redirect("/#/analysis");
                },
                json: function() {
                    res.json(sentiment);
                }
            })
        }
    })
}

exports.list = function(req, res) {
    Sentiment.find().sort('-' +
        'created').exec(function(err, articles) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(articles);
        }
    });
};

//
//router.route('/').post(function(req, res) {
//    mongoose.model('sentiment_analysis').create({
//        impressive: req.param('impressive'),
//        sentiment: req.param('sentiment'),
//        created_at: new Date()
//    }, function(error, article) {
//        if (error) {
//            res.send("There is a problem adding the information to the databases.");
//        } else {
//            console.log('POST creating new sentiment analysis ');
//            res.redirect('/');
//        }
//    })
//    router.route('/').get(function(req, res, next) {
//        // mongo에서 모든 article 가져오기
//        mongoose.model('article').find({}, function (err, articles) {
//            if (err) {
//                return console.error(err);
//            } else {
//                res.render('index.jade', {
//                    title: 'Blog',
//                    articles: articles
//                });
//            }
//        })
//    })
//})