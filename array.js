var myArray=["a","b","c","d","e","f","g","h"];
console.log (myArray);
var firstArray= new Array("A","B","C","D");

console.log(firstArray);
for(let items of firstArray){
    console.log(items);
}
// multidimensional array 
let Ban =["Dhaka","Rajshai","Faridpur"];
let Ind=["kolkata","mumbai","Delhi"]
let asia=[Ban,Ind];
console.log(asia[1][2]);

// array destructure 
let numArray=[1,2,3,4,5,6,7,8];
var [a,b,...c]=numArray
console.log(a,c,b);