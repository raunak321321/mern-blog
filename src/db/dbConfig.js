import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = "mongodb://localhost:27017";
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        dbName: "mern-blog-db",
      })
      .then(() => { console.log("MONGODB CONNECTED SUCCESSFULLY!"); })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default connectDB;
