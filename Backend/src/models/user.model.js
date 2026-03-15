import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "account already exist with this email address"],
    required: true,
  },
  username: {
    type: String,
    unique: [true, "username already taken"],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
