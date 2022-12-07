class problem{
    area(r){
        return Math.PI*r*r; 
    };

    circumference(r){
        return 2*Math.PI*r;
    }
}

module.exports=problem;


// we are using exports many times. so just create class and export it
// exports.area=function(r){
//    return Math.PI*r*r;
// };

// exports.circumference=function(r){
//         return 2*Math.PI*r;
// };