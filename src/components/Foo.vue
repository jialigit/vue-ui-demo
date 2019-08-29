<template>
	<div>
		<h1>Foo header</h1>
		<router-link to="Bar">Bar</router-link>
		<h2>{{foo}}</h2>
		<input v-focus>
		
		<ul>
			
			<li><a>jjjdjfjj</a></li>
			<li><div>this is div</div>dfjkdsjfjsjf3</li>
			<li><label>this is a label</label></li>
		</ul>
	</div>
</template>

<script>
export default{
	name: 'Foo',
	props: {
		'msg': String
	},
	data(){
		return {
			foo:"foo is foo"
		}
	}
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
