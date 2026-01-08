const express = require("express");

const app = express();


app.post('/user/login',(req,res)=>{
    res.send("login")
})

app.post('/user/signup',(req,res)=>{
   res.send("signup") 
})

app.get('/user/purchages',(req,res)=>{
   res.send("purchages") 
})

app.post('/course/purchage',(req,res)=>{ 
    res.send("to purchage a course")
})

app.get('/purchage-a-course',(req,res)=>{
    res.send("purchage-a-course")
})






app.listen(3000,()=>{
    console.log("Server is rinning in the localhost 3000")
})