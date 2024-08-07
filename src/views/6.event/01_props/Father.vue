<template>
	<Info>
		<h2>props给子组件传递属性</h2>
		<p>
			<CodeHighlight :code="code" />
		</p>
	</Info>
	<div class="father">
		<h3>父组件</h3>
		<h4>汽车：{{ car }}</h4>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
		<Child :car="car" :sendToy="getToy" />
	</div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from 'vue'

const code = ref(`父组件：<Child :car="car" :sendToy="getToy"/>子组件:defineProps(['car','sendToy'])就可以引用了；`);
// 数据
let car = ref('奔驰')
let toy = ref('')
// 方法
function getToy(value: string) {
	toy.value = value
}
</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}
</style>