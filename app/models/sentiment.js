/**
 * Created by Ellen
 */
var mongoose = require('mongoose');
//var config = require('config');
var Schema = mongoose.Schema;


// Sentiment Schema

var SentimentSchema = new Schema({
    impressive: {type : String, default : '', trim : true},
    sentiment: {type : String, default : '', trim : true},
    sentimentValue: {type : Number, default : 0, trim : true},
    createdAt: {type : Date, default : Date.now}
});

// Validations

SentimentSchema.path('impressive').required(true, 'Impressive error');
SentimentSchema.path('sentiment').required(true, 'Sentiment error');

//

mongoose.model('Sentiment', SentimentSchema);