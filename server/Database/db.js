import mongoose from "mongoose";

export const Connection = async (USERNAME, PASSWORD) => {
  const URL = "mongodb://localhost:27017/Flipcart";
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connection sucessfully");
  } catch (err) {
    console.log("error while connecting to the database", err.message);
  }
};
