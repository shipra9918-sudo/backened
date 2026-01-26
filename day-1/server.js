const express=require("express")
const app=express()
// app.get("/ab",(req,res)=>
// {
//     res.send("hello world")
// })
app.use(express.json())
const notes=[]
app.post("/notes",(req,res)=>
{
    console.log(req.body)
    notes.push(req.body)
    res.send("notes created")
})
app.get("/notes",(req,res)=>
{
    res.send(notes)
})

app.listen(3000,()=>
{
    console.log("server is running on port 3000");
    
})
//what are apis
//is a set of rules and protocols that enables different software programs to communicate and exchange data with each other

