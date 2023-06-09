'use strict'
var models = require("../models"); //matches index.js in controllers file
const generateToken = require("../utilities/generateToken")
const asyncHandler = require("express-async-handler");


//fetch list of users
const getUsers = (req, res) => {
  models.Users.find( {}, {}, {}, (err, data) =>{
      if (err) throw err;
      res.send({result: 200, data: data})
  });
};


//login
const getUser = async (req, res) => {
  const {email, password} = req.body;

  const user = await models.Users.findOne({email});

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      result: "Login Successful",
      _id: user._id,
      name: user.name,
      email: user.email,
      //password: user.password,
      pic: user.pic,
      token: generateToken(user._id)   
    });
   
    
  } else {
    res.status(400)//.send( "Invalid email or password");
    throw new Error("Invalid email or password");    
  } 
};


 
//register 
const createUser = asyncHandler (async (req, res) => {

/*  let user = new models.Users(req.body);
  let result = await user.save()
  result = result.toObject();
  delete result.password
  console.log(result)
  res.json({token: generateToken(user._id)})

*/

  let {name, email, password, pic} = req.body;
  let data = req.body;  
  
  const userExists = await models.Users.findOne({email});

   if (userExists) {
    res.status(400)//.send({result:"User already exists"})
    throw new Error("User already exists");
  } 

  const user = await models.Users.create({
    name,
    email,
    password,
    pic
  }); 

  if (user) {
    res.status(201).json({ 
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id)
  })
  } else {
    res.status(400).send({result: "Error occured"})
    //throw new Error("Error occured")
  }

  });
  
const getUserById = async (req, res) => {
  let result = await models.Users.findOne({_id: req.params.id});
  if (result) {
    res.status(201).json({ 
      _id: result._id,
      name: result.name,
      email: result.email,
      address: result.address,
      token: generateToken(result._id)
    })
    //res.send(result)
  }else {
    res.send("No user found")
  }
}
 

const deleteUser = (req, res) => {
  models.Users.findByIdAndRemove(req.params.id, (err, data) => {
      if (err) throw err;
      res.send({result: 200, data: data})
    });
};


const updateUser = asyncHandler( async (req, res) => {
  const user = await models.Users.findById( req.user._id);  

  if (user) {
      user.name = req.body.name  || user.name;
      user.email = req.body.email  || user.email;
      user.address = req.body.address  || user.address;
      user.pic = req.body.pic  || user.pic;
    
      if (req.body.password) {
        user.password = req.body.password
      }

      const updatedUser = await user.save()

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        address: updatedUser.address,
        pic: updatedUser.pic,
        token: generateToken(updatedUser._id)
      })
  } else {
      res.status(404).send("Could not update your profile")
      //throw new Error("User not found");
  }

});

module.exports = { getUsers, getUser, createUser, getUserById, deleteUser, updateUser }
