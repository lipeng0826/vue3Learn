<template>
  <div>
    <h2>{{ sum }}</h2>
    <button @click="add">点我加1</button>
  </div>
</template>
<script lang="ts" setup name="senior/3LifeCycleFile">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

const sum = ref(0)
const add = () => {
  sum.value++
}

// 创建
console.log('子创建')

// 挂载
onBeforeMount(() => {
  console.log('子挂载💰')
})

// 挂载完毕
onMounted(() => {
  console.log('子挂载完毕🎉')
})

// 更新前
onBeforeUpdate(() => {
  console.log('子更新前💰')
})

// 更新完毕
onUpdated(() => {
  console.log('子更新完毕🔧')
})

// 卸载
onBeforeUnmount(() => {
  console.log('子卸载💰')
})

// 卸载完毕
onUnmounted(() => {
  console.log('子卸载完毕🔚')
})


</script>

<style scoped></style>