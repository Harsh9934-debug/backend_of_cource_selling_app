const router = require("express");
const userRouter = router.Router(); 

userRouter.post('/login',(req,res)=>{
    res.send("login")
}) 

userRouter.post('/signup',(req,res)=>{
   res.send("signup") 
})

userRouter.get('/purchages',(req,res)=>{
   res.send("purchages") 
})

module.exports = {
    userRouter:userRouter
};
