var mongoose = require('mongoose')
var config = require('config');


// Sentiment Schema

var SentimentSchema = new mongoose.Schema({
    contents: {type : String, default : '', trim : true},
    createdAt: {type : Date, default : Date.now}
});

// Validations

SentimentSchema.path('contents').required(true, 'I can\'t hear you.');

// Save Article

//SentimentSchema.statics = {
//
//    /**
//     * Find article by id
//     *
//     * @param {ObjectId} id
//     * @param {Function} cb
//     * @api private
//     */
//
//    load: function (id, cb) {
//        this.findOne({ _id : id })
//            .populate('user', 'name email username')
//            .populate('comments.user')
//            .exec(cb);
//    },
//
//    /**
//     * List articles
//     *
//     * @param {Object} options
//     * @param {Function} cb
//     * @api private
//     */
//
//    list: function (options, cb) {
//        var criteria = options.criteria || {}
//
//        this.find(criteria)
//            .populate('user', 'name username')
//            .sort({'createdAt': -1}) // sort by date
//            .limit(options.perPage)
//            .skip(options.perPage * options.page)
//            .exec(cb);
//    }
//}

mongoose.model('Sentiment', sentimentSchema)

    
    
    
    
    

