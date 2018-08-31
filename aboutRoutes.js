var express = require('express');
var aboutRouter = express.Router();

var router = function (nav) {

    aboutRouter.route('/about')
        .get(function (req, res) {
            res.render('about', {
                title: 'Ilteris Blog',
                nav: nav
            });
        });


    return aboutRouter;
};
module.exports = router;
