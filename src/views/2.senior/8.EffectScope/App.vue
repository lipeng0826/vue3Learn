<template>
  <Info>
    <h2>EffectScope</h2>
    <p></p>
    <p></p>
  </Info>
</template>
<script setup lang="ts">
import { ref, effectScope, effect } from 'vue';

const scope = effectScope();

const returnData = () => {
    return { name: 'lipeng' }
}

// scope.run会接收函数返回值，然后返回
// 这里returnData的返回值被传出来，然后又被传出来，最后传给result
const result = scope.run(() => {
  const scope2 = effectScope();
  return scope2.run(() => returnData())
})
console.log(result);

</script>
