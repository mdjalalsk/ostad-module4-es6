class parent {

    introFun(){
        console.log(" I am a jalal");
    }
    hello(){
        console.log("hello!, How are you?");
    }
}
class child extends parent {

    hello(){
        console.log("hello!, How are you? .how old are you?");
    }

    demo(){
        super.introFun(); //when i use inharitance class at a time i use super keyword
    }
}
var obj=new parent();
obj.introFun();
obj.hello();

var obj=new child;
obj.introFun();
obj.hello();
obj.demo();
