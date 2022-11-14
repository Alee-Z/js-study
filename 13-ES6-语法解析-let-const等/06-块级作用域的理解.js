//ES6的块级作用域
//对let/const/function/class声明的类型是有效的
{
    let foo = "why"
    function demo(){
        console.log("demo");
    }
    class Person {}
}

console.log(foo);//foo is not definend
//不同浏览器下有不同的实现 (大部分浏览器会兼容以前的代码 让function没有块级作用域)
demo()
var p = new Person() //Person is not defined