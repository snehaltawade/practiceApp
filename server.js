import express from 'express'

let server=express()
let port=8080

server.get('/',(req,res)=>{
    res.send('Hello world')
})

server.listen(3000,()=>{
    console.log("server is running on port 8080")
})