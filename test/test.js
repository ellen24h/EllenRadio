var sentimenter = require('sentiment');

exports.create = function(req, res) {
    var sentiment = new Sentiment(req.body);
    //sentiment.user = req.user;

    sentiment.sentimentValue = sentimenter(req.body.sentiment).Score;

    article.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {

            res.json(sentiment);
        }
    })
}