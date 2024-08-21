<template>
  <Info>
    <h2>ref监听一个使用reactive处理之后的对象的属性</h2>
    <p>
      在这个例子中，ref监听的值发生变化是不会触发更新的，
      因为在执行setup函数的时候还没有没有activeEffect实例，就是没有添加依赖
      所以这个地方的ref其实只是对一个普通的值进行了监听，没让data.name收集到依赖；
    </p>
    <p>
      依赖收集触发的场景（产生activeEffect的场景）：
      通过 computed 或 watchEffect 访问响应式数据。
      在组件的渲染过程中读取响应式数据。
    </p>
  </Info>
  <div style="margin-left: 20px">
    ref是监听的data的name   {{ name }}
  </div>
  <div>
    <button @click="updateData">更新数据</button>
  </div>
</template>
<script lang="ts" setup name="3basicUse">
import { ref, reactive } from 'vue';

const data = reactive({name: 'jw'});
const name = ref(data.name);
const updateData = () => {
  data.name = 'jw1';
}

</script>

<style scoped lang="less">
</style>
