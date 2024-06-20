<template>
  <div class="person">
    <h2>当前求和{{ sum }}</h2>
    <button @click="increment">点我加一</button>
    <hr>
    <img style="width:200px" :src="dogImg" alt="dog" v-for="(dogImg, index) in dogList" :key="index">
    <button @click="getDog">再来一只狗</button>
  </div>
</template>
<script lang="ts" setup name="senior/2propsPerson">
import { ref } from 'vue'
import useDog from '@/hooks/useDog'

let sum = ref(0)
const increment = () => {
  sum.value++
}
const { dogList, getDog } = useDog();

</script>

<style scoped></style>