const express=require("express");
const bookRouter=require("./bookRouter");
const router=express.Router();



//request endpoints

router.use("/book",bookRouter);

router.all("/*",(req,res)=>{
    res.send("page not found");
});



module.exports=router;