//second commit
const http=require("http");
const fs=require("fs");
const { homedir } = require("os");
const PORT=4000;
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile("page/home.html","utf8",(err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end();
        });  
    }
    else if(req.url=="/about"){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1>I am on about page</h1>");
        res.end();
    }
    else{
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write("<h1>page not found</h1>");  
    res.end();  
    }
    
    
});


console.log(`server is running at http://localhost:${PORT}`);

server.listen(PORT);



// const Circle=require("./circle");
// const circle=new Circle();
// console.log(circle.area(5));
// console.log(circle.circumference(5));
// console.log(area(5));
// console.log(circumference(5));



