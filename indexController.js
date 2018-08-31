var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;




    var indexController = function (nav) {


        var getIndex = function (req, res) {

            var url =
                'mongodb://localhost:27017/BlogDB';

            mongodb.connect(url, function (err, db) {

                var collection = db.collection('post');
                collection.find({
                    // get all
                }).toArray(function (err, results) {
                    console.log(results);
                    res.render('index', {
                        title: 'Ilteris Blog',
                        nav: nav,
                        postObj: results
                    });


                });
            });

        };



    //var getById = function (req, res) {
    //    var id = new objectId(req.params.id);
    //    var url = 'mongodb://localhost:27017/BlogDB';

    //    mongodb.connect(url, function (err, db) {
    //        var collection = db.collection('post');

    //        collection.findOne({ _id: id },
    //            function (err, results) {
    //            res.render('post', {
    //                title: 'Ilteris Blog',
    //                nav: nav,
    //                postObj: results
    //            });
    //        });
    //    });

    //};

    return {
        getIndex: getIndex
        //getById: getById
    };
};

module.exports = indexController;