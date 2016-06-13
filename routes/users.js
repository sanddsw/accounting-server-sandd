var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var console = process.console;

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
    console.log(req.body);
    var loginDetails = req.body;
    var res = {};
    var query = {};
    query['email'] = loginDetails['username'];
    console.log(query);
    User.findOne(query).exec(function (err, user) {
        console.log(user);
        if (err) return handleError(err);
        if(user == null) {
            res = {
                success: false,
                reason: "No such email"
            };
            console.info("User not found");
        } else if(user.password === loginDetails.password) {
            user.password = "";
            res = {
                success: true,
                user: user
            };
            console.info("Login success");
        } else {
            res = {
                success: false,
                reason: "Parola incorecta!"
            }
            console.info("Password not found");
        }
        response.json(res);
    });
});

module.exports = router;
