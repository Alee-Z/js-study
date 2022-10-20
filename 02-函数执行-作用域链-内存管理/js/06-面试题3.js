var n = 100
function foo(){
    console.log(n);
    return
    var n = 200
}

foo()  //undefined