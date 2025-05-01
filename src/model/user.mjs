import { mongoose } from "mongoose";

const connectdb = mongoose.connect(process.env.MONGODB_URI, {
    dbName: "sample_mongo", // helps target the right DB
  });

export default connectdb;