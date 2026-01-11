const {Router}=require("express")
const adminRouter=Router();

adminRouter.post('/add-courses',(req,res)=>{
    res.send("to add a course")
})

adminRouter.get('/add-courses', (req, res) => {
    res.send("to add a course")
})

module.exports={
    adminRouter:adminRouter
}   