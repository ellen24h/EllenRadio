/**
 * Created by Ellen
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var sentiments = require('../controllers/sentiments');



module.exports = function (app) {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            console.log(req.body);
            // look in urlencoded POST bodies and delete it
            var method = req.body._method;
            delete req.body._method;
            return method;
        }
    }));

    app.route('/')
        .get(function (req, res) {
            //console.log("router"); for bug잡기....ㅠㅠ 여기에 몇시간을 썼는지 모르겠다...
            res.render('index.html');
        });

    app.route('/sentiment')
        .post(function (req, res, next) {
            sentiments.create(req, res);
        });

    app.route('/sentimentValues')
        .get(function (req, res) {
            sentiments.list(req, res);
        })
}

