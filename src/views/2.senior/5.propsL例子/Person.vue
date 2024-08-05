<template>
    <div>
      <p>{{ msg }}</p>
      <p>{{ info.name }}</p>
      <p>{{ info.age }}</p>
      <button @click="toggleMsg">切换子组件的msg</button>
      <p>{{ msg2 }}</p>
    </div>
  </template>
  <script>
  import { watch } from 'vue';
    export default {
      data() {
        return {
          msg2: '子节点的msg'
        }
      },
      props: {
        msg: String,
        info: Object
      },
      setup(proxy) {
        watch(proxy.info, val => {
          console.log(val, 'Person.vue');
        })
        // proxy.msg是一个值，无法进行监控,可以通过函数，对props进行监控
        watch(() => proxy.msg, val => {
          console.log(val, 'Person.vue');
        })
      },
      methods: {
        toggleMsg() {
          this.msg2 = this.msg2 === 'Hello world' ? 'Hello Vue' : 'Hello world'
        }
      }
    }
  
  </script>
  