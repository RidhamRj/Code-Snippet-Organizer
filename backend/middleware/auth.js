require("dotenv").config();
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.body.token;

    if(!token) {
        return res.status(401).json({message: "Unauthorized access"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(e) {
        console.log(e);
        return res.status(401).json({message: "Invalid or expired token"});
    }
}