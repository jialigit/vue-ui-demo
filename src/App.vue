<template>
	<div id="app"  >
		<router-link to="Foo">Foo</router-link>
		<router-link to="Bar"> bar</router-link>
		<router-link to="todo">todo list</router-link>
		<router-link to="bitcoin">BitCoin</router-link>
		<router-link to="shopping-cart-example">shopping-cart-example</router-link>
		<router-view></router-view>

	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	
	export default {
		name: 'app',
		components: {
				//local register components
		},
		data() {
			return {
				title: " title for App",
				 
			}
		},
		watch: {
			
			 get_bg_class:function(newVal, oldVal){
				 console.log('newVal=${newVal}, oldVal=${oldVal}')
			 }
		},
		computed:{
		 
		},
		// created: function() {
		// 	this.changeBg('bg-welcome');
		// 	//alert("foo created")
		// },
		 methods:mapActions([
		  'changeBg'
		  
		])
		
	}
</script>
<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		
		
	}

	.bg-welcome{
		border:solid 2px blue;
	}
	
	.bg-main{
		border:solid 2px green;
	}
	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>
