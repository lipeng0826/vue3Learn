<template>
  <div id="app">
    <h1>自定义文本编辑器</h1>
    <custom-editor
      v-model="editorContent"
      :input-signs="signs"
      :show-emoji="true"
      :max-length="200"
      :show-recover-btn="true"
      :disabled="false"
      type="1"
    />
    <p>当前输入内容：{{ editorContent }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CustomEditor from '@/components/EditArea.vue';

// 编辑器中的签名标签
const signs = [
  { label: '#标签1#' },
  { label: '#标签2#' },
  { label: '#标签3#' }
];

// 双向绑定编辑器的输入内容
const editorContent = ref('');
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}
</style>
