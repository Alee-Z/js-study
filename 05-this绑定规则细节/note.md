## this绑定优先级
new绑定 > 显示绑定(bind/apply/call) > 隐式绑定(obj.foo()) > 默认绑定(foo())

## this绑定特殊情景
1. call apply bind 绑定对象为null或undefined会自动将this绑定为window

2. 箭头函数中的this
   箭头函数不会绑定this arguments
不能作为构造函数来使用(不能和new一起使用 不然会报错)