const express=require("express");
const path=require("path");
const bookRouter=require("./bookRouter");
const router=express.Router();




//request endpoints
router.get("/",(req,res)=>{
    res.render("index",{name:"Garvit"});
});
router.use("/book",bookRouter);

router.all("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,"/../page/404.html"));
});



module.exports=router;