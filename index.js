const express=require('express')
const app=express()

app.post("/user/signup",function(req,res){
    res.json({
        message:"singup endpoint"
    })
})


app.post("/user/signin",function(req,res){
    res.json({
        message:"singup endpoint"
    })
})


app.get("/user/purchases",function(req,res){
    res.json({
        message:"singup endpoint"
    })
})


app.post("/course/purchase",function(req,res){
    res.json({
        message:"singup endpoint"
    })
})


app.get("/courses",function(req,res){
    res.json({
        message:"singup endpoint"
    })
})


app.listen(3000)