const express= require("express")

const app=express()
app.use(express.json())

const notes = []

app.get('/', (req,res)=>{
    res.send("Backend is working")
})

app.post('/notes', (req,res)=>{
    // console.log(req.body)

    res.json({
        message: "Note received successfully",
        data: req.body
    })
})


// app.listen(3000)
module.exports=app

