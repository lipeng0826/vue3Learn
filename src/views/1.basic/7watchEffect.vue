<template>
  <div>
    <h2>当前水温: {{ temp }}</h2>
    <h2>当前水位: {{ height }}</h2>
    <h2>当前天数: {{ day }}</h2>
    <button @click="addTemp">水位加10</button>
    <button @click="addHeight">水位加10</button>
    <button @click="addDay">天数加10</button>
  </div>
</template>
<script lang="ts" setup name="3basicUse">

import { ref, watch, watchEffect } from 'vue';

let temp = ref(37);
let height = ref(10);
let day = ref(0);

const addTemp = () => {
  temp.value += 10;
}

const addHeight = () => {
  height.value += 10;
}

const addDay = () => {
  day.value += 10;
}

// watch实现监控值的变化
watch([temp, height], ([temp, height]) => {
  console.log('水温或水位发生变化', temp, height);
  if (temp > 60 || height > 100) {
    console.log('水温或水位过高,给服务器发送警报信息');
  }
})

// watchEffect实现监控值的变化
watchEffect(() => {
  console.log('水温或水位发生变化', temp.value, height.value);
  if (temp.value > 60 || height.value > 100) {
    console.log('水温或水位过高,给服务器发送警报信息');
  }
})

</script>

<style scoped></style>
