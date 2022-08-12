const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
 
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      user_id: req.body.user_id,
      username: req.body.username,
      name: req.body.name,
      address: req.body.address,
      phone_number: req.body.phone_number,
      age: req.body.age,
      gender: req.body.gender,
      profilePic: req.body.profilePic,
      email: req.body.email,
      password: hashedPass,
      
    });

    let code = 1;

   try {
    const usercount = await User.find().sort({_id:-1}).limit(1)   
    if(usercount.length > 0)
      code += usercount[0].code
      newUser.user_id = 'UID00'+ code;
      
      newUser.code = code;
        try {
          const user = await newUser.save();
          res.status(200).json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      } catch (error) {
        console.log(error)
      }
  
  });

//LOGIN
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      !user && res.status(400).json("Wrong credentials!");
  
      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Wrong credentials!");
  
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;