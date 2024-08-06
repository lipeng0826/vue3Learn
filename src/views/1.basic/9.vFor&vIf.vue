<template>
  <Info>
    <h2>v-show,v-if,v-for</h2>
    <p>Vue3中v-show优先级比v-for低</p>
    <p>Vue3中v-if优先级比v-for高,如果要连用的话，可以给v-for的数据使用computed过滤一下</p>
  </Info>
  <div>
    <div>
      <div class="title">v-show和v-for</div>
      <div v-show="item.show" v-for="item in list" :key="item.id">{{ item.name }}</div>
      <div class="title">v-if和v-for</div>
      <div v-for="item in list" :key="item.id">
      <span v-show="item.show">
        {{ item.name }}
      </span>  
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="3basicUse">
import { reactive } from 'vue';

const list = reactive([
  { id: 1, name: 'zhangsan', show: true },
  { id: 2, name: 'lisi', show: true },
  { id: 3, name: 'wangwu', show: false },
  { id: 4, name: 'zhaoliu', show: true },
])

</script>

<style scoped>
.title {
  font-size: 20px;
  font-weight: 600;
}
</style>
