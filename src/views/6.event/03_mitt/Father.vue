<template>
  <Info>
    <h2>Mitt</h2>
    <p>
      这是个实现事件代理的库，可以注册事件，然后触发事件，可以在任意组件之间使用
    </p>
    <p>
      <CodeHighlight :code="code" />
    </p>
  </Info>
  <div class="father">
    <h3>父组件</h3>
    <Child1/>
    <Child2/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import { ref } from 'vue';
import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'

  const code = ref(`
   // 1.引入emitter
    import emitter from '@/utils/emitter.ts';
   // 2.一个组件注册
    emitter.on('send-toy',(value:any)=>{
      toy.value = value 
    })
   // 3.另一个组件触发
    <button @click="emitter.emit('send-toy',toy)">玩具给弟弟</button>
  `);
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
  .father button{
    margin-left: 5px;
  }
</style>