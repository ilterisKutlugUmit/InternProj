var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var postController = function (nav) {

    var getById = function (req, res) {
        var id = new objectId(req.params.id);
        var url = 'mongodb://localhost:27017/BlogDB';

        mongodb.connect(url, function (err, db) {
            var collection = db.collection("post");

            collection.findOne({_id: id},
                function (err, results) {
                    console.log(results);
                    res.render("post", {
                        title: "Ilteris Blog",
                        nav: nav,
                        postObj: results
                    });
                });
        });

    };

    return { getById: getById };
};

module.exports = postController;