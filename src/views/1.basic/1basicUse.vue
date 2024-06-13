<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(1)

const log1 = () => {
  console.log(1)
}
</script>

<template>
  <div>{{ count }}</div>
  <div>
    <button @click="log1" >log1</button>
  </div>
</template>

<style scoped></style>
