<template>
	<Info>
		<h2>$attrs</h2>
		<p>
				子组件可以通过$attrs接收父组件传递过来的属性,然后传给孙子组件，这样一层层传递
		</p>
		<p>
			<CodeHighlight :code="code" />
		</p>
	</Info>
  <div class="father">
    <h3>父组件</h3>
		<h4>a：{{a}}</h4>
		<h4>b：{{b}}</h4>
		<h4>c：{{c}}</h4>
		<h4>d：{{d}}</h4>
		<Child :a="a" :b="b" :c="c" :d="d" v-bind="{x:100,y:200}" :updateA="updateA"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import {ref} from 'vue'

	let a = ref(1)
	let b = ref(2)
	let c = ref(3)
	let d = ref(4)

	function updateA(value:number){
		a.value += value
	}

	const code = ref(`
	// 父组件传给子组件
	<Child :a="a" :b="b" :c="c" :d="d" v-bind="{x:100,y:200}" :updateA="updateA"/>
	// 子组件传给孙子组件
	<GrandChild v-bind="$attrs"/>
	// 孙子组件接收
	defineProps(['a','b','c','d','x','y','updateA'])
	`);
</script>

<style scoped>
	.father{
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
