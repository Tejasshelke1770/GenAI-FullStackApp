import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/db/db.js";

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`app is running on ${process.env.PORT}`);
});
