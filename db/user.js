const mongoose=require("mongoose")
const validator=require("validator")

//Scheema,

const userSchema=new mongoose.Schema({
    Fname:{
        type:String,
        required:true,
        trim:true,
        },
    Lname:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        index:{unique:true},
        required:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Please enter valid Email")
            }
        },
    },
    password:{
        type:Number,
        required:true,
        trim:true
    },
    confirmpassword:{
        type:Number,
        required:true,
        trim:true
    },
})

const User=mongoose.model("User",userSchema)
module.exports={User,User};