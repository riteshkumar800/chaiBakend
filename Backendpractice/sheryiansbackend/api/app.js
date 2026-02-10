const express= require("express")

const app=express()
app.use(express.json())

const notes = []

app.get('/', (req,res)=>{
    res.send("Backend is working")
})

app.post('/notes', (req,res)=>{
    // console.log(req.body)
    notes.push(req.body)

    // res.json({
    //     message: "Note received successfully",
    //     data: req.body
    // })
    res.status(201).json({
        message: "note created successfully"
    })
})

app.get('/notes', (req,res)=>{
    res.status(200).json({
        notes:notes
    })
})


// app.listen(3000)
module.exports=app

