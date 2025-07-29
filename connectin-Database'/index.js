import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import logger from "./middleware/logger.js";

const app = express();
const port = process.env.PORT || 3000; // Use env first, fallback to 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(logger);

app.get("/health", (req, res) => {
  return res.json({
    status: "server is running"
  });
});

//my function 
import connectdb from "./config/connectdb.js";

import student from "./models/student.model.js"

app.post("/signpu",async (req,res)=>{
    try{
        const createdStudent = await student.create({
            name:"priyanka",
            email:"gangavane@gmail.com",
            password:1234
        })

        let savestudent = await createdStudent.save()

        return res.json({
            data:savestudent
        })

    }catch(error){
        console.log("error")
    }
})
// const connectdb = async () => {
//   try {
//    await mongoose.connect("mongodb+srv://gangawanepriyanka412:Priyanka412@cluster0.dkondlo.mongodb.net/collage?retryWrites=true&w=majority");

//     console.log("Database connected");
//   } catch (error) {
//     console.log("Database not connection ");
//   }
// };

app.listen(port, () => {
  console.log(` Server listening on port ${port}`);
  connectdb();
});
