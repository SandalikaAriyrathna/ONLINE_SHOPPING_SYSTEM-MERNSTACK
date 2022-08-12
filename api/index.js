const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const clothRoute = require("./routes/cloths");
const cors=require("cors");
const multer = require("multer");
const path = require("path");



const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 


 dotenv.config();
 app.use(cors()) 
 app.use(express.json());

 app.use("/images", express.static(path.join(__dirname, "/images")));
 


 mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })

  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  const storage = multer.diskStorage({
   
    destination: (req, file, cb) => {
      console.log(req);
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
   
    res.status(200).json("File has been uploaded");
  });

  const update = multer({ storage: storage });
  app.put("/api/update", update.single("file"), (req, res) => {
    res.status(200).json("File has been updated");
  });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/cloths", clothRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});