import { Schema , model} from "mongoose";

const studentSchema= new Schema({
    name: {
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const student =model("student", studentSchema)

export default student;

