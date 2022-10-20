


AO/GO都是基于早期ECMA的版本规范:
Every execution context has associated with it a variable object. variables and functions declared in the source text are added as properties of thevariable object. For function code, parameters are added as properties of the variable object.
每一个执行上下文会被关联到一个变量环境(variable object，Vo)，在源代码中的变量和函数声明会被作为属性添加到VO中。对于函数来说，参数也会被添加到Vo中。


## 变量环境和记录
在最新的ECMA的版本规范中，对于一些词汇进行了修改∶
Every execution context has an associated VariableEnvironment Vvariables and functions declared in ECMAScript code evaluated in an executioncontext are added as bindings in that VariableEnvironment's Environment Record. For function code,parameters are also added as bindings to thatEnvironment Record.
每一个执行上下文会关联到一个变量环境(VariableEnvironment)中，在执行代码中变量和函数的声明会作为环境记录（Environment Record)添加到变量环境中。
对于函数来说,参数也会被作为环境记录添加到变量环境中。



# 内存管理
代码在执行过程中都需要给它分配内存
不同的时某些编程语言需要手动管理 有些编程语言会自动管理
代码先从磁盘加载到内存 cpu在执行代码时会在内存开辟空间

磁盘 内存  cpu


内存管理生命周期
1. 分配申请需要的内存(申请)
2. 使用分配的内存(存放东西比如对象)
3. 不需要使用时 对其进行释放


不同的编程语言第一步和第三步有不同实现
- 手动管理 如 C C++ 早期的OC 需要手动申请和释放(malloc和free函数)
- JAVA JS python swift Dart 自动管理


## JS的内存管理
定义变量、函数的时候就会自动分配内存了

- 对于基本数据类型内存分配会在执行时，直接在栈空间进行分配
- 对于复杂数据类型内存的分配会在堆内存开辟空间 并将这块空间的指针返回值变量引用

 
JS内存基本分为栈结构 堆结构

## JS的垃圾回收(Garbage Collection)

语言运行环境如java的JVM JS的JS引擎都有内存垃圾回收器

常见GC算法
1. 引用计数 
对象中有retain count 计数被引用次数
当次数为0的时候就会被回收

2. 标记清除
设置根对象(root object) 垃圾回收器会定期从这个根开始 查找所有从根开始有引用的对象 
对于那些没有引用到的对象(不可达)就认为是不可用对象
很好的解决循环引用

JS引擎广泛采用标记清除
V8会结合其他算法进行小优化