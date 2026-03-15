import jwt from "jsonwebtoken";
import blacklistTOkenModel from "../models/blacklist.model.js";
import userModel from "../models/user.model.js";

const authUser = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "token not provided!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const isBlackListToken = await blacklistTOkenModel.findOne({ token });

    if (isBlackListToken) {
      return res.status(401).json({
        message: "Invalid Token - blacklisted",
      });
    }

    // const user = await userModel.findById(decoded.id);
    // if (!user) {
    //   return res.status(401).json({
    //     message: "User not Found!",
    //   });
    // }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export default authUser;
