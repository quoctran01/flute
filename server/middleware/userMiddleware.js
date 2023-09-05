const { response } = require('express');
const jwt = require('jsonwebtoken');

const middlewareController = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if(token) {
            const asccessToken = token.split(" ")[1];
            jwt.verify(asccessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if(err)
                    res.status(403).json("token is not valid");
                req.user = user;
                next();
            })
        }
        else 
            res.status(401).json("you aren't authenticatied");
    },
    verifyTokenFromAdmin : async (req, res, next) => {
        const token = await req.headers.token;
        if(token) {
            const asccessToken = token.split(" ")[1];
            jwt.verify(asccessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if(err)
                    res.status(403).json("token is not valid");
                else {
                    if(user.id == req.params.id || user.admin)
                        next();
                    else 
                        res.status(403).json("you are not allowed");
                }
            })            
        }
        else 
            res.status(500).json("err");

        // middlewareController.verifyToken(req, res, () => {
        //     if(req.user.id == req.params.id || req.user.admin)
        //         next();
        //     else
        //         res.status(403).json("you are not allowed to delete user");
        // })
    }
}

module.exports = middlewareController;