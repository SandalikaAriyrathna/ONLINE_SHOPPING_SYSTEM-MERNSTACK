const router = require("express").Router();
const Cloth = require("../models/Cloth");

//CREATE CLOTH
router.post("/", async (req, res) => {
   
    const newCloth = new Cloth(req.body);
    let code = 1;
    try {
      const clothcount = await Cloth.find().sort({_id:-1}).limit(1)   
      if(clothcount.length > 0)
        code += clothcount[0].code
        newCloth.dress_code = 'DID00'+ code;
        newCloth.code = code;
    try {
      const savedCloth = await newCloth.save();
      res.status(200).json(savedCloth);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (error) {
    console.log(error)
  }

  });

//UPDATE CLOTH
router.put("/update/:dress_code", async(req, res) => {
    try {
      const updatedCloth = await Cloth.findOneAndUpdate({'dress_code':req.params.dress_code},
        {
          $set: req.body
        },{new:true}
      );
     res.status(200).json(updatedCloth);
    
  } catch (err) {
    res.status(500).json(err);
  }
})


//DELETE CLOTH
router.delete("/delete/:dress_code", async (req, res) => {
  try {
    const cloth = await Cloth.findOneAndDelete({'dress_code':req.params.dress_code});
    try {
      await cloth.delete();
      res.status(200).json("Cloth has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET CLOTH DETAILS
router.get("/:dress_code", async (req, res) => {
  try {
    const cloth = await Cloth.findOne({ 'dress_code': req.params.dress_code });
    res.status(200).json(cloth);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET VIEW ALL CLOTH DETAILS
router.get("/", async (req, res) => {
    try {
      const cloths = await Cloth.find();
      res.status(200).json(cloths);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //get all list
router.get("/itemcategory/:item_category/", async (req, res) => {
  try {
    const cloth = await Cloth.find({ 'item_category': req.params.item_category });
    res.status(200).json(cloth);
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router;