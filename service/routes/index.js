let express = require('express');
let router = express.Router();

const routerAuth = function (req, res, next) {
    console.log(req.url);
    if(/\/api\//.test(req.url)){
        let currentUser = req.session.userInfo;
        if (currentUser && currentUser._id && currentUser.username) {
            next();
        } else {
            res.send({
                isAuth: false
            });
        };
    } else {
        next();
    }
}

module.exports = routerAuth;
