function foo(n,m,...args){
    //剩余参数必须放在最后
    console.log(n,m,args);
    console.log(arguments);
}
//args是一个数组  arguments是一个类数组
foo(10,20,30,40,50)