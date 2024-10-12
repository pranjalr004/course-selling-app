const {Router}=require('express')
const {adminModel}=require("../db")
const adminRouter=Router()

adminRouter.post("/signup",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})


adminRouter.post("/signin",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})


    adminRouter.post("/",function(req,res){
    res.json({
        message:"signup endpoint"
    })


    adminRouter.put("/",function(req,res){
        res.json({
            message:"signup endpoint"
        })
    })
})



adminRouter.get("/bulk",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})

module.exports={
    adminRouter:adminRouter
}