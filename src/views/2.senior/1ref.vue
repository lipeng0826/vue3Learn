<template>
  <div>
    <h1>中国</h1>
    <input ref="title2" value="北京" />
    <h3>昌平</h3>
    <button @click="showLog">点我输出log</button>
  </div>
</template>
<script lang="ts" setup name="3basicUse">

import { ref, onMounted } from 'vue';

function showLog() {
  console.log(title2.value);
}

// 这个变量在模板中的ref="title2"指向的dom给赋值
let title2 = ref();
onMounted(() => {
  title2.value && title2.value.focus();
})

</script>

<style scoped></style>
