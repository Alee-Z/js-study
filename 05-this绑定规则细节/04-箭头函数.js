var nums = [1,2,3,4]
var result = nums.filter((item)=>item%2===0)
                 .map((item)=>item*2)
                 .reduce((preValue,item)=>preValue+item)
console.log(result);

//返回对象 要加括号
var bar = ()=>({name:"why",age:20})