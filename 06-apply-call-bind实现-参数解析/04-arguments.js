function foo(n1,n2,n3){
    // console.log(n1,n2,n3);
    // console.log(arguments);
    // console.log(arguments.length);
    // console.log(arguments[2]);
    console.log(arguments.callee); 
    // 1.自己for遍历进一个新的空数组
    //2.arguments转数组  slice里面的实现也是遍历
    let arr = Array.prototype.slice.call(arguments)
    let arr2 = [].slice.call(arguments)
    //3.
    let arr3 = Array.from(arguments)
    //4
    let arr4 = [...arguments]
    console.log(arr);
}

 foo(10,20,30,40,450)


//   arguments.callee()

