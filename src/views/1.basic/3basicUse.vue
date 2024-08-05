<template>
  <Info>
    <h2>ref,reactive的赋值问题</h2>
    <p class="bindTest">
      reactive不能直接赋值,ref.value可以
    </p>
    <p>
      reactive在针对对象和数组赋值的操作
    </p>
  </Info>
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
    <h1>reactive声明的方式赋值数组</h1>
    <button @click="initGameArr">获取游戏内容</button>
    <div>
      <div v-for="item in gameContentArr" :key="item.id">{{ item.name }}</div>
    </div>
    <div>
      <button @click="updateColor">更新颜色</button>
    </div>
  </div>
</template>
<script lang="ts" setup name="3basicUse">
import type { IGame } from './1';
import { ref, reactive } from 'vue';
import Info from "@/components/Info.vue"

// reactive包裹对象
let gameContent: IGame | {} = reactive({});
let gameContentRef: { value: IGame | {} } = ref({});
let gameContentArr: IGame[] = reactive([]);

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

const initGameArr = () => {
  // 使用ref定义的数据，可以直接赋值，因为ref是响应式数据，修改它的属性，会触发响应式；
  // 基本数据类型不能使用proxy，所以使用ref将这个基本数据类型包裹成一个对象，这样就可以使用proxy了
  // gameContentArr.splice(0, gameContentArr.length, { id: 1, name: '1212' });
  gameContentArr.push({ id: 1, name: '1212' });
}

const bgColor = ref('red');

const updateColor = () => {
  bgColor.value = 'green';
}

</script>

<style scoped>
  .bindTest {
   background-color: v-bind(bgColor); 
  }
</style>
