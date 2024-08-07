<template>
  <Info>
    <h2>Provider,inject</h2>
    <p>
      就是可以进行多层的数据传递
    </p>
    <p>
      <CodeHighlight :code="code" />
    </p>
  </Info>
  <div class="father">
    <h3>父组件</h3>
    <h4>银子：{{ money }}万元</h4>
    <h4>车子：一辆{{car.brand}}车，价值{{car.price}}万元</h4>
    <Child/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
  import {ref,reactive,provide} from 'vue'

  let money = ref(100)
  let car = reactive({
    brand:'奔驰',
    price:100
  })
  function updateMoney(value:number){
    money.value -= value
  }

  // 向后代提供数据
  provide('moneyContext',{money,updateMoney})
  provide('car',car)

  const code = ref(`
    // 父组件Provider数据
    provide('moneyContext',{money,updateMoney})
    provide('car',car)
    // 孙子组件获取值
    let {money,updateMoney} = inject('moneyContext',{money:0,updateMoney:(param:number)=>{}})
    let car = inject('car',{brand:'未知',price:0})
  `);

</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
</style>