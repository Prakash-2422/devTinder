const express = require("express");

const app = express();

app.use('/test',(req, res)=>{
    res.send(("Heloo from the server..."))
})

app.use('/hello',(req, res)=>{
    res.send(("Heloo Heloo Hellloo..."))
})

app.use('/',(req, res)=>{
    res.send(("Heloo from Initial..."))
})

app.listen(7777, ()=>{
    console.log("Server is Successfully listening on port 3000....")
});