<template>
  <div v-if="show">
    <lifeCycle />
  </div>
  <button @click="updateShow">切换</button>
</template>
<script lang="ts" setup name="senior/3LifeCycle">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
import lifeCycle from './lifeCycle.vue';

let show = ref(true);
let updateShow = () => {
  show.value = !show.value;
}

// 创建
console.log('父创建')

// 挂载
onBeforeMount(() => {
  console.log('父挂载💰')
})

// 挂载完毕
onMounted(() => {
  console.log('父挂载完毕🎉')
})

// 更新前
onBeforeUpdate(() => {
  console.log('父更新前💰')
})

// 更新完毕
onUpdated(() => {
  console.log('父更新完毕🔧')
})

// 卸载
onBeforeUnmount(() => {
  console.log('父卸载💰')
})

// 卸载完毕
onUnmounted(() => {
  console.log('父卸载完毕🔚')
})

</script>

<style scoped></style>