<template>
  <div class="talk">
    <button @click="getLoveList">获取一句土味情话</button>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.content }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup name="senior/2propsPerson">
import axios from 'axios'
import { nanoid } from 'nanoid';
import { useLoveTalk } from '@/stores/loveTalk'
import { storeToRefs } from 'pinia';
const loveTalk = useLoveTalk();
// 使用storeToRefs将store中的数据转换为ref，从而实现响应式
const { list } = storeToRefs(loveTalk);

const getLoveList = async () => {
  let result = await axios.get('https://api.uomg.com/api/rand.qinghua')
  loveTalk.unshift({
    content: result.data.content,
    id: nanoid(),
  })
}

</script>

<style scoped></style>