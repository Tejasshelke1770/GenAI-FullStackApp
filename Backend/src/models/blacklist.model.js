import mongoose from "mongoose";

const blackListTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      require: [true, "Token is requried to be added in blacklist"],
    },
  },
  { timestamps: true },
);

const blacklistTOkenModel = mongoose.model(
  "blackListToken",
  blackListTokenSchema,
);

export default blacklistTOkenModel;
