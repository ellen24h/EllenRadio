/**
 * Created by Ellen on 2015. 9. 20..
 */
var mongoose = require('mongoose')
var config = require('config');


// Sentiment Schema

var SentimentAnalysisesSchema = new mongoose.Schema({
    sentiment: {type : String, default : '', trim : true},
    sentimentPoint: {type : Number},
    createdAt: {type : Date, default : Date.now}
});

// Validations

SentimentSchema.path('contents').required(true, 'I can\'t hear you.');

//