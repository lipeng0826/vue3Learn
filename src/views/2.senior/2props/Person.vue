<template>
    <div>
        <h2>
            <ul>
                <li v-for="item in list" :key="item.id">
                    {{ item.name }} - {{ item.age }}
                </li>
            </ul>
        </h2>
    </div>
</template>
<script lang="ts" setup name="senior/2propsPerson">
import { type PersonInter } from '@/types/index';

// 接收list
// const { list } = defineProps(['list'])

// 接收+限制类型
const { list } = defineProps<{list: PersonInter}>()

// 接收+限制类型+必要限制+默认值
// withDefaults(defineProps<{list?: PersonInter}>(), {
//     list: [{ id: '1', name: 'zhangsan', age: 18 }]
// })

</script>

<style scoped></style>