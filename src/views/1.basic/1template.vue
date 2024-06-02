<script>
import { ref } from 'vue'

export default {
  name: '1Template',
  // `setup` 是一个特殊的钩子，专门用于组合式 API。
  setup() {
    const count = ref(1)

    // 将 ref 暴露给模板
    return {
      count
    }
  }
}
</script>

<template>
  <div>{{ count }}</div>
</template>

<style scoped></style>
