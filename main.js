const EventEmitter=require("events");
const myEvent=new EventEmitter();
const express=require("express");
const app=express();
port=3001;

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});

myEvent.on("test-event",(data)=>{
    console.log("event is listening");
    console.log(data);
});

app.get("/",(req,res)=>{
    myEvent.emit("test-event",{name:"garvit chawla"});
    res.send("<h1>Hello welcome to the express</h1>");
});

app.post("/",(req,res)=>{
    res.json({data:"comming from post request"});
});

