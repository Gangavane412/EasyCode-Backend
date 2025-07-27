import mongoose from "mongoose";

const connectdb = async () => {
   try {
    await mongoose.connect("mongodb+srv://gangawanepriyanka412:Priyanka412@cluster0.dkondlo.mongodb.net/collage?retryWrites=true&w=majority");

    console.log("Database connected");
  } catch (error) {
    console.log("Database not connection ");
  }
}


export default connectdb;