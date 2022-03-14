const express=require('express')
const mongoose=require('mongoose')
const User=require("./modals/signup")

//Db connection
mongoose.connect("mongodb://127.0.0.1:27017/dashboard")
const app=express();
const port=process.env.PORT || 3000

app.use(express.json());
app.use(User);
app.listen(port,()=>{
    console.log(`server is running on port : ${port}`)
})