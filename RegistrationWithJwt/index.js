const mongoose = require("mongoose")

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = express()
app.use(express.json())

mongoose
  .connect("mongodb+srv://Avnish:avnish123@cluster0.vnjkv64.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

const UserScheema = new mongoose.Schema({
    Name:{type:String, required:true, },
    Email:{type:String,required:true,unique:true},
    Password:{type:String,required:true,unique:true},
    MobileNumber:{type:String, required:true,unique:true}
})


const UserAuthModule = mongoose.model("auth",UserScheema)
app.post("/register", async (req, res) => {
  try {
    const { Name, Email, Password, MobileNumber } = req.body;

    // Check if user already exists
    let user = await UserAuthModule.findOne({ Email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Password, salt);

    // Save new user
    user = new UserAuthModule({
      Name,
      Email,
      MobileNumber,
      Password: hashedPassword,
    });
    await user.save();

    // Generate JWT Token immediately after registration
    const token = jwt.sign(
      { userId: user._id },
      "secretkey", // store securely in env file
      { expiresIn: "10h" }
    );

    res.status(201).json({
      message: "User registered successfully",
      token, // send token
      user: {
        id: user._id,
        Name: user.Name,
        Email: user.Email,
        MobileNumber: user.MobileNumber,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//
// 🔹 LOGIN — Validate credentials and return token
//
app.post("/login", async (req, res) => {
  try {
    const { MobileNumber, Password } = req.body;

    const user = await UserAuthModule.findOne({ MobileNumber });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user._id },
      "secretkey",
      { expiresIn: "10h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        Name: user.Name,
        Email: user.Email,
        MobileNumber: user.MobileNumber,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//
// 🔹 Middleware — Verify Token
//
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "Access denied. Token missing." });

  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
}

//
// 🔹 Protected Route — Get Profile
//
app.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await UserAuthModule.findById(req.user.userId).select("-Password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "Profile fetched successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

//
// 🔹 Start Server
//
const PORT = 4500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
