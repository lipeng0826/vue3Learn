<template>
  <div class="category">
    <slot name="s1">默认内容1</slot>
    <slot name="s2">默认内容2</slot>
  </div>
</template>

<script setup lang="ts" name="Category">
import { ref, defineProps, getCurrentInstance, onBeforeUpdate } from 'vue';

onBeforeUpdate(() => {
  console.log(1111);
})

// 搜索initSlots可以查看slot相关代码
const instance = getCurrentInstance();
console.log(instance);
</script>

<style scoped>
  .category {
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
    width: 200px;
    height: 300px;
  }
</style>