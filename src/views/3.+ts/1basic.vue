<template>
    <div>
            {{ person.name }}
    </div>
</template>
<script lang="ts" setup name="1basicTsUse">
import { type PersonInter } from '@/types/index';
 
let person: PersonInter = {
    id: '1',
    name: 'zhangsan',
    age: 18
}

</script>

<style scoped></style>