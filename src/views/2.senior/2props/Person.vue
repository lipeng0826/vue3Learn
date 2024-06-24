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
    <div>
        {{ name }}
    </div>
</template>
<script lang="ts" setup name="senior/2propsPerson">
import { type PersonInter } from '@/types/index';

// 接收list
// const { list, name } = defineProps(['list', 'name'])

// 接收+限制类型
const { list, name } = defineProps<{list: PersonInter[], name: string}>()

// 接收+限制类型+必要限制+默认值
// withDefaults(defineProps<{list?: PersonInter[], name: string}>(), {
//     list: [{ id: '1', name: 'zhangsan', age: 18 }],
//     name: 'lisi'
// })

</script>

<style scoped></style>