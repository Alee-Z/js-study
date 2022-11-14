var msg = "通过var可以加在window里面"
console.log(window.msg);

/**
 * 也就是说我们声明的变量和环境记录是被添加到变量环境中的:
 * 但是标准有没有规定这个对象是window对象或者其他对象呢?
 * 其实并没有，那么JS引擎在解析的时候，其实会有自己的实现;
比如v8中其实是通过VariableMap的一个hashmap来实现它们的存储的。
么window对象呢?而window对象肆早期的GO对象
在最新的实现中其实是浏览器添加的全局对象，并且
—直保持了window和var之间值的相等性;

 */