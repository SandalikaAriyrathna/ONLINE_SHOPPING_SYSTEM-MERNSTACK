const mongoose = require("mongoose");

const ClothSchema = new mongoose.Schema(
  {
    dress_code: {
      type: String,
      required: true,
      unique: true,
    },
    dress_type: {
      type: String,
      required: true,
    },
    dress_size: {
      type: String,
      required: false,
    },
    quantity: {
      type: String,
      required: false,
    },
    material: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
    item_category: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
    note: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      default: "",
    },
    code:{
      type: Number,
      required:true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cloth", ClothSchema);