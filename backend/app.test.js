require("dotenv").config();
require("./db/dbConnect").connect();
const express = require("express");
import app from "./server"

const app = express();

app.use(express.json());

// Logic goes here
const User = require("./models/user");

// Register
app.post("/register", async(req, res) => {
// our register logic goes here...
let user = new models.Users(req.body);
  let result = await user.save()
  result = result.toObject();
  delete result.password
  console.log(result)
  res.json({token: generateToken(user._id)})
});

// Login
app.post("/login", async (req, res) => {
// our login logic goes here

const {email, password} = req.body;
const user = await models.Users.findOne({email});
console.log(email)

if (user && (await user.matchPassword(password))) {
  res.status(200).json({
    result: "Login Successful",
    _id: user._id,
    name: user.name,
    email: user.email,
  
    pic: user.pic,
    token: generateToken(user._id)   
  });
  
} else {
  res.status(400)//.send( "Invalid email or password");
  console.log(res)
  throw new Error("Invalid email or password");    
} 
});

module.exports = app;
