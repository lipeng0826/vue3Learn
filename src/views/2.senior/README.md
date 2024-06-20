# vue senior

## ref

    ref是一个响应式对象，可以用来存储组件的实例或者dom元素

```js
// 先声明一个ref
<input ref="title2" value="北京" />;

// 使用同名参数获取ref
let title2 = ref();
```

## props

    在使用ts的时候，props需要加上类型声明，还有默认值

```js
// 接收list
// defineProps(['list'])

// 接收+限制类型
// defineProps<{list: PersonInter}>()

// 接收+限制类型+必要限制+默认值
withDefaults(defineProps<{list?: PersonInter}>(), {
    list: [{ id: '1', name: 'zhangsan', age: 18 }]
})
```

这块还需要学习 ts 语法；

## lifeCycle

    1.声明周期
    2.父子组件生命周期

## 自定义 hooks

    类似于react，vue3也可以自定义hooks
    hooks是一个函数，函数内部可以使用其他hooks；
    hooks的命名规则：useXXX
    hooks还可以使用生命周期函数
    hooks不可以在条件语句中使用
