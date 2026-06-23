import mongoose from "mongoose";
// import { unique } from "next/dist/build/utils";
let Schema=new mongoose.Schema({
    name:{
          type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },
    number:{
        type:String,
        required:true,
        
    },
    message:{
        type:String,
        required:true,
    },
})
let ContactModel=mongoose.models.contact || mongoose.model("contact",Schema)
export default ContactModel;