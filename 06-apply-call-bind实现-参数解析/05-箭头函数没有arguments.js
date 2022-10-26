var foo = ()=>{
    console.log(arguments);
}

//foo() //node里面的arguments是全局中的  浏览器运行会报错



//箭头函数中没有arguments  会在上层作用域中找
function foo1(){

    return bar = ()=>{
        console.log(arguments);
    }
}

let a = foo1(10,1)
a()
