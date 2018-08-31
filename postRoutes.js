var express = require('express');
var postRouter = express.Router();
//var mongodb = require('mongodb').MongoClient;
//var objectId = require('mongodb').ObjectID;


var router = function (nav) {
    var postController = require("../controllers/postController")(nav);
    
    postRouter.route("/:id").get(postController.getById);


    //postRouter.route("/").get(postController.getIndex);


    return postRouter;

};

module.exports = router;