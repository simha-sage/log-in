
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const connect=async ()=> {
    try{
        await mongoose.connect(process.env.my_string)
        console.log("connected")
    }catch(e){
        console.error(e)
    }
}
const user=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
})
const User=mongoose.model("user list",user)
export{
    connect,
    User
}