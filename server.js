const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 4000;

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload_images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(express.static("public"));

app.post("/upload", upload.array("images", 5), (req, res) => {
  // Handle file uploads and send a response
  res.json({ message: "Images uploaded successfully!" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
