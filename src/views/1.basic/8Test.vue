<template>
  <Info>
    <h2>watchEffect的使用</h2>
    <p>
    </p>
  </Info>
  <div>

  </div>
</template>
<script lang="ts" setup name="3basicUse">

import { ref, watch, reactive } from 'vue';
import Info from "@/components/Info.vue"

// 2) 处理数组的includes方法等
const data = { name: 'jw' };
const arr = reactive([data]); // 对象中套对象 在取值的时候会进行递归代理
console.log('arr[0] === data', arr[0] === data); // 这里访问arr[0]的时候获取的是代理对象
// 从对象上访问了includes属性 会走代理

// 这里调用includes 内部会将代理对象转换成原始对象，在进行处理 arr.includes 原始的不行再去调用代理过的
console.log('arr.includes(data)', arr.includes(data)); // 正常情况下不应该为true，所以要重写includes方法

let o1 = { a: 1 };
let s1 = reactive(o1); // s1 == proxy
let proxy = reactive([o1]) // 数组里放原始值  arr == proxy
console.log('proxy.includes(s1)', proxy.includes(s1)); // 用代理对象来进行判断
// 在使用的时候 可以用它来includes(原始对象) 、 includes(代理对象 )


</script>

<style scoped></style>
