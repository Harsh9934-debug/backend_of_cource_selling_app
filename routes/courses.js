const express=require("express");
const router=express.Router();

router.post('/purchage',(req,res)=>{ 
    res.send("to purchage a course")
})

router.get('/purchage-a-course',(req,res)=>{
    res.send("purchage-a-course")
})

module.exports = router;