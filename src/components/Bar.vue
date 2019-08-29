<template>
	<div>
		<h1>Bar header</h1>
		<router-link to="Foo">Foo</router-link>
		<h2>{{bar}}</h2>
	
	</div>
	
	
</template>

<script>
export default{
	name: 'Bar',
	props: {
		'msg': String
	},
	data(){
		return {
			bar:"bar is a bar"
		}
	}
}
</script>

<style>
	
	
	 
</style>
