const router = require("express").Router();
const User = require("../models/User");
const Cloth = require("../models/Cloth");
const bcrypt = require("bcrypt");

//UPDATE
router.put("/:user_id", async(req, res) => {
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  try {
    const updatedUser = await User.findOneAndUpdate({'user_id':req.params.user_id},
      {
        $set: req.body
      },{new:true}
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  } 
})

//DELETE
router.delete("/:user_id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({'user_id': req.params.user_id});
    try {
      await user.delete();
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/:user_id", async (req, res) => {
  try {
    const user = await User.findOne({'user_id': req.params.user_id});
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET  ALL USERS
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;