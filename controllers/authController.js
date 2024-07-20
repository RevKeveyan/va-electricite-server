require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const SECRET = process.env.SECRET || "Vardan_best_electric";

class AuthController {

  generateAccessToken(user) {
    const payload = { ...user._doc };
    delete payload.password;
    return jwt.sign(payload, SECRET, { expiresIn: "7d" });
  }

   login = async(req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const token = this.generateAccessToken(user);
        return res.status(200).json({ token });
      } else {
        return res.status(401).json({ message: "Invalid email or password" });
      }
    } catch (error) {
      return res.status(500).json({error, message: "Server error" });
    }
  }

  getAuthenticatedUser = async (req, res) => {
    try {
      const token = req.headers.authorization;
      const decodedData = jwt.verify(token, SECRET);
      const user = await User.findOne({_id:decodedData._id})
      
      if(!user){
        return res.status(401).json({error, message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      return res.status(401).json({error, message: 'User not found' });
    }
  };

  logout = async(req, res) => {

    if (req.headers.authorization) {
      return res.status(200).json({ message: "Logout successful" });
    } else {
      return res.status(401).json({error, message: "No token found" });
    }
  }

  
}

module.exports = new AuthController();
