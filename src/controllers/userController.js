const express = require("express");
const {body, validationResult} = require("express-validator");

const User = require("../model/userModel");

const userControl = express.Router();

userControl.post(
    

    body("firstName").trim().not().isEmpty().bail().withMessage("First Name cannot be empty")
    .isLength({min:4}).withMessage("First Name must be more than 4 characters"),

    body("email").isEmail().custom(async (value) => {
        const user = await User.findOne({email: value});
        
        if(user){
            throw new Error("email is already registered");
        }
        return true;
    }),

    body("password").not().isEmpty().withMessage("Password required")
    .custom((value) => {
        const pass =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15};
        if(!value.match(pass)) {
            throw new Error(" Password Must be Strong");
        }
        return true;
    }),

    async(req, res) => {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(400).send({errors: errors.array()});
            }

            const user = await User.create(req.body);
            return res.status(201).send({message});
        }
    }
);

module.exports = userControl;