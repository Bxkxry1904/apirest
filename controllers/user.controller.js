const User = require("../models/User.model");

//creer un nouvel utilisateur

module.exports.addUser = async (req, res )=>{
    const {firstname, lastname, email} = req.body;
    try{
        const user = await User.create({firstname, lastname, email})
        res.status(201).json('use added ${user} ') 
    }
    catch(err){
        res.status(500).json({message : err})
    }
}

module.exports.showUser = async (req, res )=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(users) 
    }
    catch(err){
        res.status(500).json({message : err})
    }
}

module.exports.updateUser = async (req, res )=>{
    try{
        const user = await User.findByIdAndUpdate(
            {_id: req.params.id},
            {
                $set: {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                }
            },
            {new: true});
        
        res.status(200).json({message: "update succesfully"}) 
    }
    catch(err){
        res.status(500).send({message : err})
    }
}