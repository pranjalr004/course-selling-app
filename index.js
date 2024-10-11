const express=require('express')
const {userRouter}=require("./routes/user")
const {createCourseRoutes}=require("./routes/course")
const app=express()

createUserRoutes(app)
createCourseRoutes(app)


app.use("/user",userRouter)
app.use("/course",courseRouter)

app.listen(3000)