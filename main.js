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

app.route("/book").get((req,res)=>{
    myEvent.emit("test-event",{name:"garvit chawla"});
    res.send("<h1>All Books</h1>");
}).post((req,res)=>{
    res.json({data:"Your book has been created"});
});



app.get("/book/:id",(req,res)=>{
    console.log(req);
    res.send(`Single book ID:${req.params.id}`);
});

app.all("/*",(req,res)=>{
    res.send("page not found");
});
