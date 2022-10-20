var msg = "hello Global"

function foo(){
    console.log(msg);
}

function bar(){
    var msg = "hello Bar"
    foo()
}

bar()