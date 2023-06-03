function add( a,b){
    // a=10;
    // b=20;
    sum=a+b;
    console.log(sum);
}
add(10,20);
function somthing(x,y,...values){
  console.log(x,y,values);
}
somthing(1,2,3,"a","b","c","d","e",);
function myfun(c){
    return c
}
console.log (myfun("bangladesh"));
// anonymouss function 
var mylike=function(){
    return "i like flowers"
}
console.log (mylike());
var mylike=function(){
    return "i like flowers a lot "
}
console.log (mylike());
// arry function 
let myarryfun= (...x)=>{
   console.log (x)
  
}
myarryfun("t",1,2,5);

let myarry= (x)=>{
 return x;
  
}
myarryfun("hello world");
