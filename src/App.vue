<script setup>
import { RouterView } from 'vue-router';
import DragBox from '@/components/dragBox/App.vue';

import { onMounted, onUpdated } from 'vue';
import { useRouter } from 'vue-router';

onMounted(() => {
  // 获取当前激活的路由
  const router = useRouter();
  console.log(router.currentRoute.value);
})

</script>
<template>
  <div>
    <DragBox :top="100" :right="350" :age="18">
      <div class="tabs-list">
        <!-- <div>
          <RouterLink active-class="active" to="/AboutView">entry/AboutView</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/HomeView">entry/HomeView</RouterLink>
        </div> -->
        <!-- basic -->
        <div>
          <RouterLink active-class="active" to="/1basic/1basicUse">1basic/1basicUse</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/1basic/2basicUse">1basic/2basicUse</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/1basic/3basicUse">1basic/3basicUse</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/1basic/4toRefs">1basic/4toRefs</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/1basic/5computed">1basic/5computed</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/1basic/6watch">1basic/6watch</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/1basic/7watchEffect">1basic/7watchEffect</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/1basic/8Test">1basic/8Test</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/1basic/animation">1basic/animation</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/1basic/vFor&vIf">1basic//vFor&vIf</RouterLink>
        </div>
        <!-- senior -->
        <div>
          <RouterLink active-class="active" to="/2senior/1ref">/2senior/1ref</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/2senior/2props">/2senior/2props</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/2senior/3lifeCycle">/2senior/3lifeCycle</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/2senior/4hooks">/2senior/4hooks</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/2senior/longIncrease">2senior/5.propsL</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/2senior/teleport">2senior/6.Teleport</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/2senior/emitEvent">2senior/emitEvent</RouterLink>
        </div>
        <!-- ts -->
        <div>
          <RouterLink active-class="active" to="/3+ts/1basic">/3+ts/1basic</RouterLink>
        </div>
        <!-- router -->
        <div>
          <RouterLink active-class="active" to="/4router/2params">/4router/2params</RouterLink>
        </div>
        <!-- pinia -->
        <div>
          <RouterLink active-class="active" to="/5pinia/1basicUse">/5pinia/1basicUse</RouterLink>
        </div>
        <!-- event -->
        <!-- <div>
        <RouterLink active-class="active" to="/6event/">/5pinia/1basicUse</RouterLink>
      </div> -->
        <div class="sub-list">
          <router-link active-class="active" class="list-group-item" to="/6event/props">1. props</router-link>
          <router-link active-class="active" class="list-group-item" to="/6event/event">2. 自定义事件</router-link>
          <router-link active-class="active" class="list-group-item" to="/6event/mitt">3. mitt</router-link>
          <router-link active-class="active" class="list-group-item" to="/6event/model">4. v-model</router-link>
          <router-link active-class="active" class="list-group-item" to="/6event/attrs">5. $attrs</router-link>
          <router-link active-class="active" class="list-group-item" to="/6event/ref-parent">6. <span
              class="small">$refs、$parent</span></router-link>
          <router-link active-class="active" class="list-group-item" to="/6event/provide-inject">7.
            provide、inject</router-link>
          <router-link active-class="active" class="list-group-item" to="/6event/pinia">8. pinia</router-link>
          <router-link active-class="active" class="list-group-item" to="/6event/slot_default">9.1slot_default</router-link>
          <router-link active-class="active" class="list-group-item" to="/6event/slot_juming">9.2slot_juming</router-link>
          <router-link active-class="active" class="list-group-item" to="/6event/Slot_ZuoYongYu">9.3slot_ZuoYongYu</router-link>
        </div>
        <!-- vuex -->
        <div>
          <RouterLink active-class="active" to="/7vuex/1demo">7vuex/vuexDemo</RouterLink>
        </div>
        <div>
          <RouterLink active-class="active" to="/8other/longIncrease">8other/longIncrease</RouterLink>
        </div>
      </div>
    </DragBox>
    <RouterView />
  </div>
</template>

<style scoped lang="less">
.tabs-list {
  position: absolute;
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

  .active {
    color: red;
  }

  .sub-list {
    margin-top: 10px;
    margin-left: 15px;

    a.active {
      color: green;
    }

    .list-group-item {
      font-weight: bold;
      color: navy;

      &:hover {
        color: greenyellow;
      }
    }

    >a {
      display: block;
      margin-left: 20px;
    }
  }

}
</style>
