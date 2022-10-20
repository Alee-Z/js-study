function foo(){
    var a = b = 100;
    //转化为两行 b = 100; var a = 100;
    //当b在全局中没有定义就相当于全局  当b在全局有定义就会覆盖原有值
}

foo()
console.log(a);  // undefined
console.log(b);  // 100