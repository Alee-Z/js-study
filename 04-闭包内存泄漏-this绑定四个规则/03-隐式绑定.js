const obj1 = {
    name:"obj1",
    foo:function(){
        console.log(this,this.name);
    }
}

const obj2 = {
    name:"obj2",
    foo:obj1.foo
}

obj2.foo()