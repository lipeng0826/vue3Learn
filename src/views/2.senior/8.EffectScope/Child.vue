<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['updateName']);

</script>

<template>
  <button @click="emit('updateName', '旺财')">更新名字</button>
</template>
