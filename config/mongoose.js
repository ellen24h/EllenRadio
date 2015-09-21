var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

module.export = function() {
    var db = mongoose.connect('mongodb://localhost/ellenradiodb');
    autoIncrement.initialize(db);
    //require('../app/models/user');
    var Sentiment = mongoose.model('Sentiment');

    return db;
}

