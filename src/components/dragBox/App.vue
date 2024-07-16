<template>
  <div class="draggable" :style="{ position: 'fixed', top: y + 'px', left: x + 'px' }" @mousedown="onMouseDown">
    <slot></slot>
  </div>
</template>
<script setup lang="ts" name="dragBox">
import { onMounted, onUnmounted, ref } from "vue";
import _ from "lodash";

// withDefaults(defineProps<{ right?: number, top?: number, age?: number }>(), {
//   right: 0, top: 0, age: 18
// })

// defineProps<{ right?: number, top?: number, age?: number }>();
const props = defineProps<{ right: number, top?: number, age?: number }>();

let x = ref(0);
let y = ref(0);
let dragging = ref(false);
let offsetX = ref(0);
let offsetY = ref(0);
let rightPos = ref(props.right);

x.value = window.innerWidth - (props.right || 0)
y.value = props.top || 0;

onmousedown = (e: MouseEvent) => {
  dragging.value = true;
  offsetX.value = e.clientX - x.value;
  offsetY.value = e.clientY - y.value;
};

onmousemove = (e: MouseEvent) => {
  if (dragging.value) {
    x.value = e.clientX - offsetX.value;
    y.value = e.clientY - offsetY.value;
    rightPos.value = window.innerWidth - x.value;
  }
};

onmouseup = () => {
  dragging.value = false;
};

const updateSize = _.throttle(() => {
  // 获取
  x.value = window.innerWidth - rightPos.value;
}, 100);

onMounted(() => {
  // 监听window.sesize事件
  window.addEventListener('resize', updateSize)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateSize)
})

</script>


<style scoped lang="less"></style>
