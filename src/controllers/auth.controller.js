import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Please provide username, email or password",
    });
  }

  const exUser = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (exUser) {
    return res.status(400).json({
      message: "Account already exist with this email or username",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    email,
    username,
    password: hash,
  });

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully!",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "email and password is required!",
    });
  }

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const validPass = await bcrypt.compare(password, user.password);

  if (!validPass) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" },
  );
  res.cookie("token", token);

  return res.status(200).json({
    message: "user loggedIn successfully!",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
};
