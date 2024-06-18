<template>
  <div>
    <div>
      <div style="margin-bottom: 10px">
        在vue中是不能直接给是响应式的数据重新赋值的；这样会让响应式的数据失效；
      </div>
      <h1>reactive声明的方式</h1>
      <button @click="initGame">获取游戏内容</button>
      <div v-if="gameContent.id">{{ gameContent.id }}: {{ gameContent.name }}</div>
      <div v-else>数据未加载。。。</div>
      <!--  -->
      <h1>ref声明的方式</h1>
      <button @click="initGameRef">获取游戏内容</button>
      <div v-if="gameContentRef.id">{{ gameContentRef.id }}: {{ gameContentRef.name }}</div>
      <div v-else>数据未加载。。。</div>
    </div>
  </div>
</template>
<script lang="ts" setup name="3basicUse">

import { ref, reactive } from 'vue';
// reactive包裹对象
let gameContent = reactive({});
let gameContentRef = ref({});

const initGame = () => {
  // 在这里不能直接给
  // gameList = { id: 1, name: 'game1' }; 这样写是不更新的，因为响应式数据已经断开连接了
  // gameList = reactive({ id: 1, name: 'game1' }); 这样写是不更新的，因为响应式数据已经断开连接了
  Object.assign(gameContent, { id: 1, name: 'game1' }); // 这样写是更新的
  // 类似的道理，数组也是不能直接赋值的
};
const initGameRef = () => {
  // 使用ref定义的数据，可以直接赋值，因为ref是响应式数据，修改它的属性，会触发响应式；
  // 基本数据类型不能使用proxy，所以使用ref将这个基本数据类型包裹成一个对象，这样就可以使用proxy了
  gameContentRef.value = { id: 1, name: 'game1' };
}

</script>

<style scoped></style>
