<template>
  <Info>
    <h2>Teleport</h2>
    <p>可以将某个节点绑定到外部dom上</p>
    <p>在一些弹框上挺好用的</p>
  </Info>
  <button @click="isOpen=true">Update Value</button>
  <Teleport to="body">
    <div v-if="isOpen">
      这是一个弹窗
    </div>
    <button @click="isOpen=false">关闭</button>
  </Teleport>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

</script>