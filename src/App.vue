<script setup>
import { RouterView } from 'vue-router';

</script>
<template>
  <div>
    <div style="margin:20px;display: inline-block;">
      <RouterLink to="/1basic/1template">Home</RouterLink>,
      <RouterLink to="/AboutView">Home</RouterLink>,
      <RouterLink to="/HomeView">Home</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style scoped></style>
