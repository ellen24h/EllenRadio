var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var db = mongoose.connect('mongodb://localhost/ellenradiodb');
autoIncrement.initialize(db);

