const userModel = require('../models/user.model');
const bcrypt = require("bcrypt")
const { registerValidate } = require('../validations/userValidation');
const jwt = require('jsonwebtoken')

const userController = {
    creatUser: async (req, res) => {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);

        const {err} = registerValidate(req.body)
        if(err){
            return res.status(400).send("check data input");
        }

        const emailExisted = await userModel.findOne({email: req.body.email})
        if(emailExisted) {
            return res.status(400).send("email is existed");
        }


        const newUser = new userModel();
        newUser.userName = req.body.userName;
        newUser.email = req.body.email;
        newUser.password = hashed;
        newUser.phoneNumber = req.body.phoneNumber;
        try {
            const user = await newUser.save();
            res.send(user)
        } catch (error) {
            console.log('err')
            res.send('error')
        }
    },
    genergateAccessToken : (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin,
                username: user.userName,
            },
            process.env.JWT_ACCESS_KEY,
            {
                expiresIn: "1d"
            }
        )
    },
    genergateRefreshToken : (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            },
            process.env.JWT_ACCESS_KEY,
            {
                expiresIn: "1d"
            }
        )
    },
    loginUser : async (req, res) =>  {
        try {
            const user = await userModel.findOne({
                email: req.body.email
            })
            if(!user) {
              return  res.status(500).json("not exist in DB");
            }

                const decodePassword = await bcrypt.compare(
                    req.body.password, user.password
                )
                if(!decodePassword) {
                    res.status(500).json("isn't correct password");
                } 
                if(user && decodePassword) {
                    const asccessToken = userController.genergateAccessToken(user);
                    const refreshToken = userController.genergateRefreshToken(user)
                    res.cookie("refreshToken", refreshToken, {
                        // httpOnly: true,
                        // secure: false,
                        // paht: "/",
                        // sameSite: "strict"
                    })
                    const {password, ...others} = user._doc;
                    res.status(200).json({...others, asccessToken});
                }
            
        } catch (error) {
            res.status(500).json(error)
        }
    },
    // logout : async (req, res) => {
    //     try {
    //         res.clearCookie
    //     } catch (error) {
    //         res.status(200).json(error);
    //     }
    // },
    getAllUsers : async (req, res) => {
        try {
            const listUser = await userModel.find({}).exec();
            res.status(200).json(listUser)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getOneUser : async (req, res) => {
        try {
            const user = await userModel.findById({_id: req.params.id}).exec();
            res.status(200).send(user)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    deleteUser : async (req, res) => {
        try {
            const _id = req.params.id;
            const userNeeedDelete = userModel.findOneAndDelete(_id, (err, user) =>{
                if(err) {
                    res.send("delete failed")
                } else {
                    res.send("delete successed");
                }
            })
        } catch (error) {
            res.status(500).send(error)
        }
    },
    editUser : async (req, res) => {
        const _id = req.params.id;
        // const salt = await bcrypt.genSalt(10);
        // const hashed = await bcrypt.hash(req.body.password, salt);
        const userNeededUpdate = userModel.findByIdAndUpdate(_id, 
            {
                $set: {
                    userName : req.body.userName,
                    email : req.body.email,
                    // password : hashed,
                    phoneNumber : req.body.phoneNumber,
                    admin: req.body.admin               
                }
            },
            {$upset: true},
            (err, user) =>{
                if(err) {
                    res.send("update failed")
                } else {
                    res.send("update successed");
                }
            }           
            )
    }
}

module.exports = userController;