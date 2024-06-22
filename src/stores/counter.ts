import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * 
 * 定义一个名为 counter 的 store
 *  defineStore 接受两个参数，第一个参数是 store 的名字，第二个参数是一个函数，函数返回一个对象，对象中包含了 store 的数据和方法
 *     第二个参数可以是一个函数，也可以是一个对象
 * 
 */

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function add(value: number) {
    count.value += value;
  }
  function minus(value: number) {
    count.value -= value;
  }

  return { count, doubleCount, add, minus }
})
