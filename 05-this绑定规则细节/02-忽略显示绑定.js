function foo(){
    console.log(this);
}

foo.call({})
foo.call(null)
foo.call(undefined)
foo.apply(undefined)
let bar = foo.bind(undefined)
bar()