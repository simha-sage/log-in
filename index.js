import express from "express"
import bcrypt from "bcrypt"
import {connect,User} from "./database.js"
const app=express()
app.use(express.json())
const start=async ()=>{
    try{
        await connect()
        app.listen(3000,()=>{
        console.log("listening on 3000")
        })
    }catch(err){
        console.error(err)
    }
}
start()

//apis
app.post("/signup",async (req,res)=>{
    try{
        const{Name,email,password}=req.body
        const hashedPassword=await bcrypt.hash(password,10)
        const newuser=new User({Name,email,password:hashedPassword})
        newuser.save()
        res.send(Name+" added")
    }catch{
        res.status(500).send("error creating user")
    }
})

app.post("/login",async(req,res)=>{
    try{
        const {Name,password}=req.body
        const user=await User.findOne({Name})
        const match=await bcrypt.compare(password,user.password)

        if(match){
            res.send("successful")
        }else{
            res.send("failed")
        }
    }catch(e){
        res.send("something wrong")
    }
})