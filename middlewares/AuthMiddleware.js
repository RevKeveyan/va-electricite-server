const jwt = require('jsonwebtoken')
require("dotenv").config();
const SECRET = process.env.SECRET || "Vardan_best_electric";


exports.authMiddleware = (req, res, next) =>{
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(403).json({message: "User not found"});
        };
        const decodedData = jwt.verify(token, SECRET);
        req.user = decodedData;
        next();
    } catch (e) {
        return res.status(403).json({message: "Login first"});
    }
};