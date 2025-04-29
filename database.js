
import mongoose from "mongoose";

const connect=async ()=> {
    try{
        await mongoose.connect("mongodb+srv://munna-bhai:H6H4IcSYXbsk1zZ8@first-cluster.ljcmp.mongodb.net/signed-up")
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