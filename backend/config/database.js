import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connected to mongodb database ${connect.connection.host}`.bgYellow.black
    );
  } catch (error) {
    console.log(`Errors in MongoDb ${error}`.bgRed.white);
  }
};
export default connectDB;
