const obj1 = {
    name:"obj1",
    foo(){
        console.log(this);
    }
}

const obj2 = {
    name:"obj2"
}

// obj2.bar = obj1.foo
// obj2.bar()

;(obj2.bar = obj1.foo)()  //相当于foo()  独立函数调用