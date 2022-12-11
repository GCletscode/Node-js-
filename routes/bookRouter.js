const express=require("express");
const bookRouter=express.Router();


bookRouter.route("/").get((req,res)=>{
    //myEvent.emit("test-event",{name:"garvit chawla"});
    res.send("<h1>All Books</h1>");
}).post((req,res)=>{
    res.json({data:"Your book has been created"});
});


bookRouter.get("/:id",(req,res)=>{
    res.send(`Single book ID:${req.params.id}`);
});

module.exports=bookRouter;