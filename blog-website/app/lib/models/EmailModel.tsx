import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
let Schema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
let EmailModel=mongoose.models.email || mongoose.model("email",Schema)
export default EmailModel;