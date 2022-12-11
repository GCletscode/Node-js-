const express=require("express");
const app=express();
port=3001;


app.get("/",(req,res)=>{
    res.send("<h1>Hello welcome to the express</h1>");
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});