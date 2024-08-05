<template>
  <Info>
    <h2>EmitEvent</h2>
    <p>从props传入的事件需要使用defineEmits来获取</p>
    <p>不使用defineEmits接收的话，会放到顶层元素上</p>
  </Info>
  <div>{{ name }}</div>
  <Child @updateName="updateName" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Child from './Child.vue';

const name = ref('张三');

const updateName = (newVal: string) => name.value = newVal;

</script>
