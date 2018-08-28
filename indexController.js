var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var indexController = function (nav) {

    var getIndex = function (req, res) {

        var url = 'mongodb://localhost:27017/blogDB';

        mongodb.connect(url, function (err, db) {

            var myCOllection = db.collection('post');
            collection.find({}).toArray(function (err, results) {
                res.render('index', {
                    title: 'Ilteriş Blog',
                    nav: nav,
                    postObj: results
                });
            });
        });
    };



    var getById = function (req, res) {
        var id = new objectId(req.params.id);
        var url = 'mongodb://localhost:27017/blogDB';

        mongodb.connent(url, function (err, db) {
            var collection = db.collection('post');

            collection.findOne({ _id: id }, function (err, results) {
                res.render('index', {
                    title: 'Ilteriş Blog',
                    nav: nav,
                    postObj: results
                });
            });
        });

    };

    return {
        getIndex: getIndex,
        getById: getById
    };
};

module.exports = indexController;