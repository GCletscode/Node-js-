//second commit
const http=require("http");
const PORT=4000;
const server=http.createServer((req,res)=>{
    res.write("Hello Node");
    res.end();
});

console.log(`server is running at http://localhost:${PORT}`);

server.listen(PORT);



// const Circle=require("./circle");
// const circle=new Circle();
// console.log(circle.area(5));
// console.log(circle.circumference(5));
// console.log(area(5));
// console.log(circumference(5));



