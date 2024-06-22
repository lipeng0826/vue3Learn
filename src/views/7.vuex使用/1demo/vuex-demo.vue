<script setup>
import { useCounterStore } from '../../../stores/counter'
const store = useCounterStore()
</script>

<template>
  <div>
    <button @click="store.increment">Increment</button>
    <div>{{ store.count }}</div>
    <div>{{ store.doubleCount }}</div>
  </div>
</template>

<style scoped></style>
