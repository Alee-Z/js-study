//"use strict";
//严格模式下 with是不被允许的语法
var obj = {name:"why",age:20,msg:"obj"}

function foo(){
    function bar(){
        with(obj){
            console.log(msg);
            console.log("-----------");
        }
    }
    bar()
}
foo()

var info = {name:"kobe"}
with(info){
    console.log(name);
}