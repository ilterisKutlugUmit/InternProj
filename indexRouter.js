var express = require("express");
var indexRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var router = function (nav) {
    var indexController = require("../controllers/indexController")(nav);

    indexRouter.route("/").get(indexController.getIndex);

    //ileride post/:id olabilir (post router'ına taşı)
    indexRouter.route("/:id").get(indexController.getById);

    return indexRouter;

};

module.exports = router;