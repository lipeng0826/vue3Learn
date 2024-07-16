<template>
  <Info>
    <h2>computed的使用</h2>
    <p>
      在使用解构赋值对对象进行解构的时候；如果是基本数据类型会出现无法修改数据；
    </p>
  </Info>
  <div>
    姓：<input type="text" v-model="firstName" /><br />
    名：<input type="text" v-model="lastName" />
  </div>
  <div>
    姓名：{{ name }}
  </div>
</template>
<script lang="ts" setup name="3basicUse">

import { computed, ref } from 'vue';
import Info from "@/components/Info.vue"

const firstName = ref('zhang');
const lastName = ref('san');

const log = () => {
  console.log(firstName, lastName)
}

const name = computed(() => {
  return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
})

</script>

<style scoped></style>
