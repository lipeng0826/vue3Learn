<template>
  <Info>
    <h2>这是标题</h2>
    <p>
      这是内容
    </p>
    <p>
      <CodeHighlight :code="code" />
    </p>
  </Info>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!-- v-model用在组件标签上 -->
    <!-- <AtguiguInput v-model="username"/> -->
    <!-- <AtguiguInput 
      :modelValue="username" 
      @update:modelValue="username = $event"
    /> -->

    <!-- 修改modelValue -->
    <AtguiguInput v-model:ming="username" v-model:mima="password"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import { ref } from "vue";
  import AtguiguInput from './AtguiguInput.vue'
  // 数据
  let username = ref('zhansgan')
  let password = ref('123456')
  const code = ref(`
  // 1.传给子组件
  <AtguiguInput v-model:ming="username" v-model:mima="password"/>
  // 2.子组件获取props和事件
  defineProps(['ming','mima'])
  const emit = defineEmits(['update:ming','update:mima'])
  // 触发事件
  @input="emit('update:ming',(<HTMLInputElement>$event.target).value)"
  `);
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
