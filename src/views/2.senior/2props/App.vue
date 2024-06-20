<template>
    <Person :list="personList" />
</template>
<script lang="ts" setup name="senior/2propsPerson">
import { reactive } from 'vue'
import Person from './Person.vue'
import { type PersonInter } from '@/types/index';

let personList: PersonInter = reactive([
    { id: '1', name: 'zhangsan', age: 18 },
    { id: '2', name: 'lisi', age: 20 },
    { id: '3', name: 'wangwu', age: 22 }
])

</script>

<style scoped></style>