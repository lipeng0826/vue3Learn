<template>
  <Info>
    <h2>watch的使用</h2>
    <p>
      Vue3中的watch只能监视一下四种数据：<br />
      1.ref定义的数据（包括计算属性）<br />
      2.reactive定义的数据<br />
      3.函数返回一个值（getter函数）<br />
      4.一个包含上述内容的数组<br />
    </p>
  </Info>
  <!--  -->
  <div>
    <h2>情况1: 监视基本数据类型</h2>
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="add">num+1</button>
  </div>
  <!--  -->
  <div>
    <h2>情况2: 监视ref定义的对象类型数据</h2>
    <h2>姓名：{{ person.name }}</h2>
    <h2>姓名：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeAll">修改整个对象</button>
  </div>
  <!--  -->
  <div>
    <h2>情况3: 监视reactive定义的对象类型数据</h2>
    <h2>姓名：{{ user.name }}</h2>
    <h2>姓名：{{ user.age }}</h2>
    <button @click="changeUserName">修改名字</button>
    <button @click="changeUserAge">修改年龄</button>
    <button @click="changeUserAll">修改整个对象</button>
  </div>
  <!--  -->
  <div>
    <h2>情况4: 监视ref reactive定义的数据类型数组</h2>
    <h2>姓名：{{ customer.name }}</h2>
    <h2>姓名：{{ customer.age }}</h2>
    <h2>车1：{{ customer.car[0].brand }}, 车2：{{ customer.car[1].brand }}</h2>
    <button @click="changeCustomerName">修改名字</button>
    <button @click="changeCustomerCarOne">修改车1</button>
    <button @click="changeCustomerCarTwo">修改车2</button>
    <button @click="changeCustomerCarAll">修改2辆车</button>
  </div>

</template>
<script lang="ts" setup name="3basicUse">

import { ref, reactive, watch } from 'vue';
import Info from "@/components/Info.vue"

// -------condition1 ref------------
const sum = ref(0);

const add = () => {
  sum.value = sum.value + 1;
}

watch(sum, (newVal, oldVal) => {
  console.log(newVal, oldVal);
})

// -------condition2 ref------------
const person = ref({ name: 'John', age: 30 });

const changeName = () => {
  person.value.name = '李四';
}
const changeAge = () => {
  person.value.age = 25;
}

const changeAll = () => {
  person.value = { name: '王五', age: 20 };
}

// 监视的是对象的地址值，如果对象的地址值没有发生变化，那么监视不到对象内部的属性变化，修改属性值不会变
watch(person, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});

// -------condition3 reactive定义的数据类型------------

const user = reactive({ name: 'John', age: 30 });

const changeUserName = () => {
  user.name = '李四';
}
const changeUserAge = () => {
  user.age = 25;
}

const changeUserAll = () => {
  Object.assign(user, { name: '王五', age: 20 });
}

watch(user, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});

// -------condition4 reactive定义的对象属性------------

const customer = reactive({
  name: 'lipeng',
  age: 30,
  car: [
    { brand: 'TESLA', price: 100 },
    { brand: 'Benz', price: 200 },
  ]
})

const changeCustomerName = () => {
  customer.name += '~';
}

const changeCustomerCarOne = () => {
  customer.car[0].brand = 'BMW';
}

const changeCustomerCarTwo = () => {
  customer.car[1].brand = 'Audi';
}

const changeCustomerCarAll = () => {
  customer.car = [
    { brand: 'BMW--', price: 100 },
    { brand: 'Audi--', price: 200 },
  ]
}

// 监听响应式对象的基本数据类型属性，写成函数的形式
watch(() => customer.name, (value, old) => {
  console.log('customer.name', value, old);
})

// 监听响应式对象的引用类型属性，可以直接监视到细枝末节，但是无法监视整个对象的修改
watch(customer.car, (value) => {
  console.log('customer.car--attr', value);
});

// 监听响应式对象的引用类型属性，最好写成函数的形式，可以监视到对象内部的属性变化，也能监视到整个对象的修改，加上deep:true
watch(() => customer.car, (value) => {
  console.log('customer.car--function', value);
}, { deep: true });

// -------condition5 ref reactive定义的数据类型数组------------

watch([() => customer.name, () => customer.car], ([name, car], [oldName, oldCar]) => {
  console.log('array-person.name', name, oldName);
  console.log('array-person.car', car, oldCar);
})

</script>

<style scoped></style>
