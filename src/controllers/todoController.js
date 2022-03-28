const express = require("express");
const {body, validationResult} = require("express-validator");

const User = require("../model/todoModel");

const todoControl = express.Router();


todoControl.post(
    
    body("title").trim().not().isEmpty().isLength({min: 5}).withMessage("Title must be more than 5 character"),

    async(req,res) => {
        try{
            const error = validationResult(req);
            
            if(!error.isEmpty()) {
                return res.status(400).send({errors: errors.array()});
            }
            const todo = await Todo.create(req.body);
        }catch(err){
            return res.status(500).send({message: err.message});

        }
    }
);

module.exports = todo;