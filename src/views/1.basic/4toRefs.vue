<template>
    <Info>
    <h2>roRefs的使用</h2>
    <p>
      在使用解构赋值对对象进行解构的时候；如果是基本数据类型会出现无法修改数据；
    </p>
    <p>
      因为基本类型结构相当于是创建了新的变量，修改新的变量不会影响旧的值，所以无法修改；
    </p>
    <p>
      引用数据类型因为引用的是对象的地址；修改的是同一个对象，所以不存在问题；
    </p>
  </Info>
  <div>
    <div>
      <div>name: {{ name }}, age: {{ age }}</div>
      <button @click="updateName">修改名字</button>
      <button @click="updateAge">修改年龄</button>
      <button @click="updateObj2">修改Obj</button>
    </div>
    <div>
      <div>name2: {{ name2 }}, age2: {{ age2 }}</div>
      <button @click="updateName2">修改名字</button>
      <button @click="updateAge2">修改年龄</button>
      <button @click="updateObj2">修改Obj</button>
    </div>
    <div>
      person.name: {{ person.name }}
      person.age: {{ person.age }}
      person.obj: {{ person.obj }}
    </div>
  </div>
</template>
<script lang="ts" setup name="3basicUse">

import { reactive, toRefs } from 'vue';
import Info from "@/components/Info.vue"

let person = reactive({
  name: 'lipeng',
  age: 18,
  obj: {
    isGood: true,
    isVeryGood: true
  }
})

let { name, age, obj } = person;

// 这样是不会更新数据的，因为我们只是创建了个新变量，然后修改了变量的值；
const updateName = () => {
  name = 'lipeng++'
}

// 这样是不会更新数据的，因为我们只是创建了个新变量，然后修改了变量的值；
const updateAge = () => {
  age = 19
}

const updateObj = () => {
  obj = { isGood: true, isVeryGood: !obj2.value.isVeryGood }
}

// 使用toRefs将对象的key转化成响应式数据
let { name: name2, age: age2, obj: obj2 } = toRefs(person);

const updateName2 = () => {
  name2.value = name2.value + '+'
}

const updateAge2 = () => {
  age2.value = age2.value + 1;
}

const updateObj2 = () => {
  obj2.value = { isGood: true, isVeryGood: !obj2.value.isVeryGood }
}

</script>

<style scoped></style>
