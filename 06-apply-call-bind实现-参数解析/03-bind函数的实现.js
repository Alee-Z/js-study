Function.prototype.hybind = function(thisArg,...argArr){
    //1.获取当前函数this
    var fn = this
    //2.绑定this
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) :window

    return function proxyFn(...args){
        thisArg.fn = fn
        let result = thisArg.fn([...argArr,...args])
        delete thisArg.fn
        return result
    }
}

function foo(){
    console.log(this);
}

function sum(n1,n2,n3,n4){
    console.log(this,n1,n2,n3,n4);
}

// var bar = sum.bind("abc",10,20,30,40)
// bar()

// bar = sum.bind("abc")
// bar(10,20,30,40)

// bar = sum.bind("abc",10,20)
// bar(30,40)


var bar = sum.hybind("abc",10,20)
bar(30,40)