const catMe=require("cat-me")

console.log(catMe());


const express=require('express')
const app=express()//server instance create krna
//server ko start karna

app.get('/',(req,res)=>
{
    res.send("hello world")
})
app.get('/about',(req,res)=>
{
    res.send("this is about page")
})
app.listen(3000 )