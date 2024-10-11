function createCourseRoutes(app){
    app.post("/course/purchase",function(req,res){
        res.json({
            message:"singup endpoint"
        })
    })
    
    
    app.get("/courses/preview",function(req,res){
        res.json({
            message:"singup endpoint"
        })
    })
}

module.exports={
    createCourseRoutes:createCourseRoutes
}