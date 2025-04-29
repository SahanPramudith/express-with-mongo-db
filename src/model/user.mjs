import { connect } from "mongoose";

const connectdb=connect(process.env.MONGO_URI)

export default connectdb;