<template>
  <div class="count">
    <h2>当前求和为: {{ counter.count }}</h2>
    <select name="" id="" @change="updateN">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">点我加</button>
    <button @click="minus">点我减</button>
  </div>
</template>
<script lang="ts" setup name="senior/2propsPerson">

import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore();
const n = ref(1);

const updateN = (e: any) => {
  n.value = Number(e.target.value)
}

const add = () => {

  // 方法1: 直接修改数据
  // counter.count += n.value;
  // 方法2: 调用$patch方法,就是可以批量变更
  counter.$patch({
    count: counter.count + n.value
  })
  // counter.add(n.value)
}

const minus = () => {
  counter.minus(n.value)
}

counter.$subscribe((...value) => {
  console.log(value);
  
})

</script>

<style scoped>
select,
button {
  margin-left: 10px;
}
</style>