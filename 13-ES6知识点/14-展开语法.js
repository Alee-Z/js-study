const names = ["abd","klj","poi"]
const name = "why"
const info = {name:"why",age:29,friend:{name:"john"}}

//1.函数调用时
function foo(x,y,z){
    console.log(x,y,z);
}

foo(...names)
foo(...name)

//2.构造数组时
const newNames = [...names,...name]
console.log(newNames);

//3.构建对象字面量
const obj = {...info,address:"北京"}
console.log(obj);

//展开语法是浅拷贝

obj.friend.name = "newNmae"
console.log(info.friend.name);