<template>
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
