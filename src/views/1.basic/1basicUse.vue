<template>
  <Info>
    <h2>setup的基本用法</h2>
    <p>setup的基本用法</p>
  </Info>
  <div>count: {{ count }}</div>
  <div>
    <button @click="log1">log1</button><br />

    <button @click="updateCount">updateCount</button>
  </div>
</template>
<script lang="ts">
import Info from "@/components/Info.vue"

export default {
  name: '1basicUse',
  components: {
    Info
  },
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
}

</script>

<style scoped></style>
