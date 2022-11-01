"use strict";
//严格模式下 自执行函数指向undefined
function foo(){
    console.log(this);
}
foo()

var obj = {
    name: "obj",
    foo: foo
}
obj.foo()

var bar = obj.foo
bar()

//setTimeout中this指向window
//fn.apply(this=window)
setTimeout(() => {
    console.log(this);
}, 1000);

setTimeout(function() {
    console.log(this);
}, 1000);

