const express = require("express");

const app = express();

// app.use('/',(req, res)=>{
//     res.send(("Heloo from Initial..."))
// })

app.get('/user', (req, res)=>{
    res.send({firstNAme:"Prakash", lastName:"Raj"})
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    
    res.send("Posted User Successfully")
})

app.delete('/user',(req,res)=>{
    res.send("Deleted Successfully....!")
})

app.use('/test',(req, res)=>{
    res.send(("Heloo from the server..."))
})

app.use('/hello',(req, res)=>{
    res.send(("Heloo Heloo Hellloo..."))
})


app.listen(7777, ()=>{
    console.log("Server is Successfully listening on port 3000....")
});