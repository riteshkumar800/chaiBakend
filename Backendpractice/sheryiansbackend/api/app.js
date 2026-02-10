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
        message:"notes fetched successfully",
        notes:notes
    })
})

app.delete('/notes/:index', (req,res)=>{
    const index=req.params.index
    delete notes[index]
    res.status(201).json({
        message:"notes deleted successfully"
    })
})

app.patch('/notes/:index', (req,res)=>{
    const index=req.params.index
    const description =req.body.description

    notes[index].description=description
    res.status(201).json({
        message:"notes updated successfully"
    })
})


// app.listen(3000)
module.exports=app

