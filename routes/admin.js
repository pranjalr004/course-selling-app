const {Router}=require('express')
const {adminModel}=require("../db")
const adminRouter=Router()
const jwt=require('jsonwebtoken')

const JWT_ADMIN_PASSWORD="awdvajadw135"

adminRouter.post("/signup",async function(req,res){
    const {email,password,firstName,lastName}=req.body
        await adminModel.create({
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName
        })
    res.json({
        message:"signup successfully"
    })
})


adminRouter.post("/signin",async function(req,res){
    const {email,password}=req.body
    const admin=await adminModel.findOne({
        email:email,
        password:password
    })
    if(admin){
        const token=jwt.sign({
            id:admin._id
        },JWT_ADMIN_PASSWORD)

    res.json({
        token:token
    })
    }else{
        res.status(403).json({
            message:"Incorrect Credentials"
        })
    }
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