<script setup>
import { RouterView } from 'vue-router';

</script>
<template>
  <div>
    <div class="tabs-list">
      <div>
        <RouterLink to="/AboutView">entry/AboutView</RouterLink>
      </div>
      <div>
        <RouterLink to="/HomeView">entry/HomeView</RouterLink>
      </div>
      <!-- basic -->
      <div>
        <RouterLink to="/1basic/1basicUse">1basic/1basicUse</RouterLink>
      </div>
      <div>
        <RouterLink to="/1basic/2basicUse">1basic/2basicUse</RouterLink>
      </div>
      <div>
        <RouterLink to="/1basic/3basicUse">1basic/3basicUse</RouterLink>
      </div>
      <div>
        <RouterLink to="/1basic/4toRefs">1basic/4toRefs</RouterLink>
      </div>
      <div>
        <RouterLink to="/1basic/5computed">1basic/5computed</RouterLink>
      </div>
      <div>
        <RouterLink to="/1basic/6watch">1basic/6watch</RouterLink>
      </div>
      <div>
        <RouterLink to="/1basic/7watchEffect">1basic/7watchEffect</RouterLink>
      </div>
      <div>
        <RouterLink to="/1basic/animation">1basic/animation</RouterLink>
      </div>
      <!-- senior -->
      <div>
        <RouterLink to="/2senior/1ref">/2senior/1ref</RouterLink>
      </div>
      <div>
        <RouterLink to="/2senior/2props">/2senior/2props</RouterLink>
      </div>
      <div>
        <RouterLink to="/2senior/3lifeCycle">/2senior/3lifeCycle</RouterLink>
      </div>
      <div>
        <RouterLink to="/2senior/4hooks">/2senior/4hooks</RouterLink>
      </div>
      <!-- ts -->
      <div>
        <RouterLink to="/3+ts/1basic">/3+ts/1basic</RouterLink>
      </div>
      <!-- vuex -->
      <div>
        <RouterLink to="/6vuex/1demo">6vuex/vuexDemo</RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style scoped lang="less">
.tabs-list {
  position: absolute;
  top: 120px;
  right: 120px;
  width: 250px;
  height: 200px;
  overflow: auto;
  background-color: #5dc8ff;
  /* 天蓝色背景 */
  border: 1px solid #5dc8ff;
  /* 天蓝色边框 */
  border-radius: 10px;
  /* 圆角 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  /* 添加立体感阴影 */
  background-image: linear-gradient(to bottom, #bddfff, #5dc8ff);
  /* 上下渐变 */
  z-index: 9999999;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  >div {
    margin-top: 10px;
    margin-left: 15px;

    >a {
      /* 下边距增加 */
      font-weight: bold;
      /* 字体粗一点 */
      color: navy;

      /* 蓝色 */
      &:hover {
        color: greenyellow;
        /* 蓝色 */
      }
    }
  }

}
</style>
