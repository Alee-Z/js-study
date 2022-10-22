function foo(){
    var name = "foo"
    function bar(name){
        console.log("bar ",name);
    }
    return bar
}

var fn = foo()
fn()

//闭包内存泄漏  手动释放内存
fn = null
foo = null
