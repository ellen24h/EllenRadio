
/**
 * Module dependencies.
 */
var express = require('express');
var mongoose = require('mongoose');
var Sentiment = mongoose.model('Sentiment');
var sentimenter = require('sentiment')
var extend = require('util')._extend;


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
//TODO: 이런식으로 redirect해주면 새로고침효과가 나타나는데 이렇게 말고 ajax로 할 순 없을까?
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
};

//TODO: DB에서 json파일로 object 가져올 때 이런식으로 할 수 밖에 없나? ㅠㅠ 라우터 안통하고 하는방법 없나
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