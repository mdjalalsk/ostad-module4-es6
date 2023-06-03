// use simple class funcation  start

class myclass{
    firstfun(num){
        console.log(num);
    }
    secondfun(){
        console.log("this is my  secondfun funcation!");
    }
    thirdfun(country){
        console.log(country);
    }
    lastfun(){
        console.log("this is my lastfun funcation!");
    }
}
var object= new myclass;
object.firstfun(1500);
object.thirdfun("Bangladesh");

// use simple class funcation  end 


// use class with constructor funcation  start 

class consclass{
    constructor(a,b){
        // console.log("this is constructor");
        // console.log(a+b);
        this.firstnum=a;
        this.secondnum=b;

    }
    add(){
        let sum =this.firstnum+this.secondnum;
        console.log (sum);
    }
}
var obj=new consclass(10,20);
obj.add();

// use class with constructor funcation  end

// use class with static keyword start

class stacla{

  static hello(){
        console.log("hello world!");
    }
}
// var objects= new stacla; //if you use  static keyword ,you should not use boject class . you use only class with static keyword.
// objects.hello();

stacla.hello();


// use class with static keyword end