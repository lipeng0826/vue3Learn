<template>
    <Person :list="personList" :name="superA" />
    <button @click="updateList">add</button>
</template>
<script lang="ts" setup name="senior/2propsPerson">
import { reactive, ref } from 'vue'
import Person from './Person.vue'
import { type PersonInter } from '@/types/index';

let superA = ref('zhangsan');

let personList: PersonInter[] = reactive([
    { id: '1', name: 'zhangsan', age: 18 },
    { id: '2', name: 'lisi', age: 20 },
    { id: '3', name: 'wangwu', age: 22 }
])

const updateList = () => {
    personList.push({ id: '4', name: 'zhaoliu', age: 24 })
}

</script>

<style scoped></style>