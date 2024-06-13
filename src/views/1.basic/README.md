# Vue3 基础使用

## 在 vue2 和 vue3 写法上的区别

    1.vue2是options API，vue3是composition API
    2.vue3引入了setup函数，将data、methods等放在setup函数中
    3.这里可以插入一个对比图表，目前没找到

## setup

    1.setup的使用

```js
  setup() {
    // 定义非响应式数据
    let name = 'Vue3';
    let count = 0;
    // 定义非响应式方法
    const log1 = () => {
      console.log('1');
    };
    const updateCount = () => {
      // 由于定义的count是非响应式数据，所以这里需要手动更新视图
      count++;
    };
    // 返回数据
    return {
      name,
      count,
      log1,
      updateCount
    };
  }
```

    1.setup声明了属性，方法，返回的数据会被挂载到模板中，可以直接使用
    2.setup和data可以同时存在吗？
        可以，data可以读取setup中的数据，但setup不可以读取data中的数据，但是不能这么写，太恶心人；

## setup 简写

<script lang="ts" setup>
// 定义非响应式数据
let name = 'Vue3';
let count = 0;
// 定义非响应式方法
const log1 = () => {
  console.log('1');
};
const updateCount = () => {
  // 由于定义的count是非响应式数据，所以这里需要手动更新视图
  count++;
};
</script>

    1.使用script标签，lang="ts"表示使用typescript
    2.使用setup关键字，可以直接定义属性和方法，不需要再写setup函数
