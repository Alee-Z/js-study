function foo(){
    console.log(this);
}
const obj = {
    name:"obj"
}

//bind()返回一个新函数  call()和apply()相当于return undefined;
var fn = foo.call(obj)
console.log(fn);
var fn2 = foo.apply(obj)

var fn3 = foo.bind(obj)
console.log(fn3);

//默认绑定和显示绑定bind冲突：优先级(显式绑定)
fn3()