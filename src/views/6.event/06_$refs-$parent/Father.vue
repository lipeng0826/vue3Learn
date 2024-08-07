<template>
	<Info>
		<h2>$refs,$parent</h2>
		<p>
			在组件场景下$refs可以获取子组件的引用，
			$parent可以获取父组件的引用
		</p>
		<p>
			<CodeHighlight :code="code" />
		</p>
	</Info>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产：{{ house }}</h4>
		<button @click="changeToy">修改Child1的玩具</button>
		<button @click="changeComputer">修改Child2的电脑</button>
		<button @click="getAllChild($refs)">让所有孩子的书变多</button>
		<Child1 ref="c1"/>
		<Child2 ref="c2"/>
	</div>
</template>

<script setup lang="ts" name="Father">
	import Child1 from './Child1.vue'
	import Child2 from './Child2.vue'
	import { ref,reactive } from "vue";
	let c1 = ref()
	let c2 = ref()

	// 注意点：当访问obj.c的时候，底层会自动读取value属性，因为c是在obj这个响应式对象中的
	/* let obj = reactive({
		a:1,
		b:2,
		c:ref(3)
	})
	let x = ref(4)

	console.log(obj.a)
	console.log(obj.b)
	console.log(obj.c)
	console.log(x) */
	

	// 数据
	let house = ref(4)
	// 方法
	function changeToy(){
		c1.value.toy = '小猪佩奇'
	}
	function changeComputer(){
		c2.value.computer = '华为'
	}
	function getAllChild(refs:{[key:string]:any}){
		console.log(refs)
		for (let key in refs){
			refs[key].book += 3
		}
	}
	// 向外部提供数据
	defineExpose({house})

	const code = ref(`
	// 父组件expose house
	defineExpose({house})
	// 子组件Child1 在模板中$parent获取父组件的house，修改它
	<button @click="minusHouse($parent)">干掉父亲的一套房产</button>
	// child1，child2分别expose了下面的数据
	defineExpose({toy,book})
	defineExpose({computer,book})
	// 父组件之前先声明ref指向子组件，然后调用子组件导出的方法
	let c1 = ref()
	let c2 = ref()
	<button @click="getAllChild($refs)">让所有孩子的书变多</button>
	function getAllChild(refs:{[key:string]:any}){
	console.log(refs)
		for (let key in refs){
			refs[key].book += 3
		}
	}
	`);

</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}

	.father button {
		margin-bottom: 10px;
		margin-left: 10px;
	}
</style>

