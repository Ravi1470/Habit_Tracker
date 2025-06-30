import mongoose from "mongoose";

const connectDb = () => {
  const isProduction = process.env.NODE_ENV === "production";
  console.log("isProduction:", isProduction);
  const mongoUri = isProduction
    ? process.env.MONGO_URI
    : process.env.MONGO_URI_LOCAL || "mongodb://localhost:27017/habit-tracker";
  mongoose
    .connect(mongoUri)
    .then(() => console.log("mongodb is connected"))
    .catch((error) => console.log(error));
};

export default connectDb;
