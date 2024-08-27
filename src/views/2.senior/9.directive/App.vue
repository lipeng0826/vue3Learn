<template>
  <Info>
    <h2>自定义指令</h2>
    <p>官网地址：https://cn.vuejs.org/guide/reusability/custom-directives.html</p>
    <p>这个demo是：使用getCurrentInstance获取当前组件实例
      2.在组件onMounted之后获取当前组件实例，然后注册指令，然后给指令添加操作
    </p>
  </Info>
  <div>
    <input v-focus />
  </div>
</template>
<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue';

onMounted(() => {
  const instance = getCurrentInstance();
  const app = instance?.appContext.app;

  if (app) {
    app.directive('focus', {
      mounted(el) {
        el.focus();
      }
    });
  }
});
</script>
