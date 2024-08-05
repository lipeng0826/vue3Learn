<template>
  <Info>
    <h2>Props对基本数据类型和引用数据类型的不同处理</h2>
    <p>对基本数据类型子组件接收的是基本数据类型，没有响应式，子组件接收到之后自己对props增加了响应式</p>
    <p>对引用数据类型，使用reactive包裹的，数据传递给子组件之后还是有响应式的</p>
  </Info>
  <button @click="addAge">Add age</button>
  <span>{{ info.age }}</span>
  <button @click="toggleMsg">Toggle Msg</button>
  <hello-world :msg="msg" :info="info"></hello-world>

</template>

<script>
import { watch, reactive, ref } from 'vue';
import HelloWorld from './Person.vue'

export default {

  components: { HelloWorld },

  setup() {

    const info = reactive({
      name: 'Tom',
      age: 18
    })
    const msg = ref('Hello world');

    watch(info, val => {
      console.log(val, 'App.vue');
    })
    watch(() => msg, val => {
      console.log(val, 'App.vue');
    })

    return {
      info, msg
    }
  },

  methods: {
    addAge() {
      this.info.age++
    },

    toggleMsg() {
      this.msg = this.msg === 'Hello world' ? 'Hello Vue' : 'Hello world'
    }
  }

}

</script>