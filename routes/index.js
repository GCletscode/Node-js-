const express=require("express");
const path=require("path");
const bookRouter=require("./bookRouter");
const router=express.Router();




//request endpoints
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/../page/home.html"));
});
router.use("/book",bookRouter);

router.all("/*",(req,res)=>{
    res.send("page not found");
});



module.exports=router;