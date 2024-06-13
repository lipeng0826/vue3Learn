<script lang="ts" setup name="3basicUse">
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

<template>
  <div>count: {{ count }}</div>
  <div>
    <button @click="log1">log1</button><br />

    <button @click="updateCount">updateCount</button>
  </div>
</template>

<style scoped></style>
