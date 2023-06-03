var colors=new Set();
colors.add("red");
colors.add("blue");
colors.add("black");
colors.add("green");
colors.add("white");
colors.add("green");
colors.add("white");
console.log(colors);
// another ways to create set 
var myset=new Set(['a', 'b', 'c', 'd', 'e','e','a','b']);
// set can not accept duplicate value 
console.log(myset);

// myset.clear();

// console.log(myset.values());
myset.add("white");
myset.delete('e');
console.log(myset.size);
if (myset.has("wh")) {
    console.log ("yse");
}else{
    console.log ("no");
}
