function foo(n,m){
    console.log(n,m);
}
// foo(20,30)

//另外一种调用函数的方式 标签模板字符串
// foo``

const name="why"
const age = 18
foo`hello${name}wo${age}rld`
//第一个参数是模板字符串中的所整个字符串，只是被切成多块 放到一个数组中
//第二个参数是模板字符串中第一个${}
//应用场景 React的styled-components库