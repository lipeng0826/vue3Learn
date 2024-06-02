# vue3

## 参考资料

[文本教程](https://time.geekbang.org/column/article/427605?utm_campaign=geektime_search&utm_content=geektime_search&utm_medium=geektime_search&utm_source=geektime_search&utm_term=geektime_search)

vue3讲解教程2.

### 课程导读

#### 第一节

vue3不需要像react一样进行整个树的diff，只需要diff一个组件的内部即可，这样性能会更好。所以也不需要引入中断更新的概念。

#### 第二节

在vue和react开发中，我们都要按照[滑动加载流程解析&开发方式对比](https://www.processon.com/diagraming/5834fe29e4b086d1e79481f5)中的方案

#### 第三节

vue2和vue3区别：
1.vue2是基于Object.defineProperty实现的，vue3是基于Proxy实现的
Object.defineProperty只能监听对象的属性，无法监听数组的变化，需要特殊处理2.自定义渲染器3.使用了更好的TS支持
4.composition api
类似react的写法；5.内置了3个组件
6.vite支持

### 基础入门

#### vue项目创建

    1.npm create vue@latest
      1.1.node版本要求16.0以上
    2.
