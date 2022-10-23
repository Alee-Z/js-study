function foo(){
    var arr  = new Array(1024*1024).fill(1)
    function bar(){
        console.log(arr.length);
    }
    return bar
}

// var fn = foo()
var fnArr = []
for(let i = 0;i<100;i++){
    setTimeout(()=>{
        fnArr.push(foo())
    },i*100)
}
