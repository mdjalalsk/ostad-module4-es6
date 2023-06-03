let family={father:"Shadat Hossain", mother:"kohinoor begum",brother:"jibon", sister:"sath"};
console.log(family['mother']);
let bio ={
    brother:{
        face: "beautiful",
        age:50,
        prof:"student"
    },
    sister:{
        false: "sweet",
        age:16,
        prof:"student",
    }

}
result = bio['brother']['face'];
console.log(result);
for (let props in family){
    console.log(props +":"+family[props]);
}