var express = require('express');
var contactRouter = express.Router();

var router = function (nav) {

    contactRouter.route('/contact')
        .get(function (req, res) {
            res.render('contact', {
                title: 'Ilteris Blog',
                nav: nav
            });
        });


    return contactRouter;
};
module.exports = router;