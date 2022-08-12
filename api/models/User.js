const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      
    },
    address: {
      type: String,
      required: true,
      
    },
    phone_number: {
      type: String,
      required: true,
      
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    code: {
      type: Number,
      required: true,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);