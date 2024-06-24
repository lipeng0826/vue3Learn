- [组件通信](#组件通信)
  - [1.props](#1props)
  - [2.$emit](#2emit)
  - [3.mitt](#3mitt)
  - [4.v-model](#4v-model)

# 组件通信

## 1.props

父组件通过 props 向子组件传递数据，子组件通过 props 接收数据。

## 2.$emit

在 vue3 中，子组件通过`$emit`向父组件传递数据。

```js
<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="emit('send-toy', toy)">测试</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from "vue";
// 数据
let toy = ref("奥特曼");
// 声明事件
const emit = defineEmits(["send-toy"]);
</script>
```

在子组件中和vue2是不一样的，vue2中是通过`this.$emit`，而在 vue3 中是通过`emit`。

1.const emit = defineEmits(["send-toy"]);
2. @click="emit('send-toy', toy)
这样的写法；

## 3.mitt

类似于自定义事件，可以在任何组件之间传递数据。

```js
<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="sendToy">测试</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from "vue";
import mitt from "mitt";
// 数据
let toy = ref("奥特曼");
// 事件总线
const emitter = mitt();
// 发送数据
const sendToy = () => {
  emitter.emit("send-toy", toy.value);
};
</script>
```

## 4.v-model

v-model的本质是一个语法糖，它会根据组件的props和emit自动生成对应的代码。
比如在input上：

```js
<input v-model="name" />
```

会被解析成：

```js
<input :value="name" @input="name = $event.target.value" />
```

在组件上：

```js
<Child v-model:name="name" />
```

会被解析成：

```js
<Child :name="name" @update:name="val => name = val" />
```
