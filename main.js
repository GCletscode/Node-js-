const EventEmitter=require("events");
const myEvent=new EventEmitter();
const express=require("express");
const app=express();
const router=require("./routes/index.js");
app.set('view engine', 'pug');
port=3001;

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});

myEvent.on("test-event",(data)=>{
    console.log("event is listening");
    console.log(data);
});
//Middleware
app.use(router);


