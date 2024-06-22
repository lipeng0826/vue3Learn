# pinia使用

## 通过一下例子了解pinia的基本使用

第一步在入口js引入和安装pinia

```js

// 引入pinia
import { createPinia } from 'pinia'
// 安装pinia
app.use(createPinia())
```

定义一个store

```js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```

### 第一步：导入defineStore函数

```js
import { defineStore } from 'pinia'
```

### 第二步：定义一个store

```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```

#### 第一个参数是store的名字

一般是一个字符串，用来标识store的名字，可以通过这个名字获取store
一般使用usexxxStore命名

#### 第二个参数是一个函数

函数返回一个对象，对象中包含了store的数据和方法

#### 第二个参数也可以是一个对象

对象中包含了store的数据和方法
有类似vuex的：state、getters、actions等

```js
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
```

### 使用store

```js
import { useCounterStore } from './stores/counter'

const counterStore = useCounterStore()
console.log(counterStore.count) // 0
counterStore.increment()
console.log(counterStore.count) // 1
console.log(counterStore.doubleCount) // 2
```

store不能解构，因为store是响应式的，解构后会失去响应式
