const {Router}=require("express")
const adminRouter=Router();

const {adminmodel}=require("../db.js")

adminRouter.post('/add-courses',(req,res)=>{
    res.send("to add a course")
})

adminRouter.get('/add-courses', (req, res) => {
    res.send("to add a course")
})

module.exports={
    adminRouter:adminRouter
}   