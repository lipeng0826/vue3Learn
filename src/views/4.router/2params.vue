<template>
  <div>
    <h2>2params</h2>
  </div>
</template>
<script lang="ts" setup name="senior/2propsPerson">
 import { useRoute} from 'vue-router';

 let route = useRoute();

// 获取路由参数
 console.log(route);

</script>

<style scoped></style>