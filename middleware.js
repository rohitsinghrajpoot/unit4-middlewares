const express = require("express")

const app = express();


app.use(allbooks)

app.get("/books", (req,res)=>{
    console.log("response")
})
function allbooks(req,res,next){
   console.log("Fetching all books")
    next()
}

app.get("/book/:name",singlebook,(req,res)=>{
   return res.send({bookName:req.name})
})
function singlebook(req,res,next){
   req.name=req.params.name
   next()
}

 app.listen(4000,()=>{
     console.log("listening port")
 })