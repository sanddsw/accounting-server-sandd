var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

// router.post('/register/', function(req, res, next) {
//     var user = new User(req.body);
//     user.rl = 2;
//     user.save(function(err, us){
//         if(err){ console.log(err);return next(err); }
//
//         res.json({
//             success: true,
//             user: us
//         });
//     });
// });
router.post('/login/', function(req, response, next) {
    var loginDetails = req.body;
    var res = {};
    var type = (require('email-validator').validate(loginDetails.username)) ? "email" : "username";
    var query = {};
    query[type] = loginDetails[type];
    User.findOne(query).exec(function (err, user) {
        if (err) return handleError(err);
        if(user == null) {
            res = {
                success: false,
                reason: "Nu exista un asemenea " + type + "!"
            }
        } else if(user.password === loginDetails.password) {
            user.password = "";
            res = {
                success: true,
                user: user
            }
        } else {
            res = {
                success: false,
                reason: "Parola incorecta!"
            }
        }
        console.log(res);
        response.json(res);
    });
});

module.exports = router;
