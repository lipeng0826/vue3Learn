<template>
  <Info>
    <h2>ref,reactive的基本用法</h2>
    <p>ref,reactive的基本用法</p>
  </Info>
  <div>count: {{ count }}</div>
  <div>
    <button @click="log1">log1</button><br />
    <button @click="updateCount">updateCount</button>
  </div>
  <div>Person.name: {{ Person.name }}</div>
  <div>
    <button @click="updatePersonName">updatePersonName</button>
  </div>
  <div>
    <ul>
      <li v-for="item in GameList" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="updateGameList">updateGameList</button>
  </div>
  <div>
    <ul>
      <li v-for="item in appleDevice" :key="item.type">{{ item.type }}: {{ item.price }}</li>
    </ul>
    <button @click="updateAppleDevieceValue">update appleDevice</button>
  </div>
</template>
<script lang="ts" setup name="3basicUse">

import { ref, reactive } from 'vue';
import Info from "@/components/Info.vue"

// ref包裹基本数据类型
let count = ref(0);
// reactive包裹对象
const Person = reactive({
  name: 'zhangsan',
  age: 18,
})
const GameList = reactive([
  { id: 1, name: '王者荣耀' },
  { id: 2, name: '英雄联盟' },
  { id: 3, name: '绝地求生' },
  { id: 4, name: '和平精英' },
  { id: 5, name: '穿越火线' },
  { id: 6, name: '逆水寒' },
  { id: 7, name: '剑网3' },
]);
// ref 包裹对象
const appleDevice = ref([
  { type: 'iphone', price: 10000 },
  { type: 'ipad', price: 5000 },
  { type: 'macbook', price: 15000 },
]);
console.log('count, Person, GameList, appleDevice', count, Person, GameList, appleDevice);
// 定义非响应式方法
const log1 = () => {
  console.log('1');
};
const updateCount = () => {
  // 由于定义的count是非响应式数据，所以这里需要手动更新视图
  count.value++;
};
const updatePersonName = () => {
  Person.name = 'lisi';
};
const updateGameList = () => {
  GameList[0].name = 'cs';
};
const updateAppleDevieceValue = () => {
  appleDevice.value[0].price = appleDevice.value[0].price + 1000;
};

</script>

<style scoped></style>
