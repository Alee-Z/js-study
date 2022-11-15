function foo(n = "aaa",m = "bbb"){
    console.log(n,m);
}

foo()
foo(12)
foo(12,34)
foo(0,"")

//对象参数 默认值 解构
// function printInfo({name,age} = {name:"aaa",age:18}){
//     console.log(name,age);
// }
//另一种写法
function printInfo({name = "aaa",age = 18} = {}){
    console.log(name,age);
}
printInfo({name:"john",age:40})

//3.有默认值的形参最好放在最后

//4.有默认值的函数的length  不算在length中
function foo(a,b,c=20){

}
console.log(foo.length);