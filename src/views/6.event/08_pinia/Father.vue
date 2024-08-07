<script setup>
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>

<template>
  <Info>
    <h2>Pinia</h2>
    <p>
      pinia的具体用法可以参考其他文档，应该还行
    </p>
  </Info>
  <div>
    <button @click="() => store.add(1)">Increment</button>
    <div>{{ store.count }}</div>
    <div>{{ store.doubleCount }}</div>
  </div>
</template>

<style scoped></style>
