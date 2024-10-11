const {Router}=require('express')

const userRouter=Router()

    userRouter.post("/signup",function(req,res){
        res.json({
            message:"singup endpoint"
        })
    })
    
    
    userRouter.post("/signin",function(req,res){
        res.json({
            message:"singup endpoint"
        })
    })
    
    
    userRouter.get("/purchases",function(req,res){
        res.json({
            message:"singup endpoint"
        })
    })


module.exports={
        userRouter:userRouter
}