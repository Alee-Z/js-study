var num = [10,5,11,100,55]
console.log(num.filter((a,b)=>a%2==0));
//map 映射
console.log(num.map((a,b)=>a*2));
//find/findIndex
var friend = [
    {name:"zyl",age:22},
    {name:"fzy",age:21}
]
console.log(friend.find((a)=>a.name==="zyl"));
console.log(friend.findIndex((a)=>a.name==="zyl"));

//reduce()
console.log(num.reduce((preValue,numItem)=>preValue+numItem,0))
console.log(num.reduce((preValue,numItem)=>preValue+numItem,100))