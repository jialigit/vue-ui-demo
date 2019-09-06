<template>
	<div>
		<h1>Bar header</h1>
		<router-link to="Foo">Foo</router-link>
		<h2>{{bar}}</h2>
	 
		<BitCoin></BitCoin>
	</div>


</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex';
	
	import BitCoin from './BitCoin.vue';
	export default {
		name: 'Bar',
		props: {
			'msg': String
		},
		components: {
			BitCoin
		},
		data() {
			return {
				bar: "bar is a bar ttttt"
			}
		},
		created: function() {
			this.changeBg('bg-main');
			//alert("foo created")
		},
		computed: {

			 
		},
		methods: {

			...mapActions([
				'changeBg'

			]),
			say(message, event) {
				//alert(message);
				//alert(event.target.tagName)
				axios.get('/api/hello').then(function(res) {
					alert(JSON.stringify(res))
					alert(res.data)
				})
			},

		}
	}
</script>

<style>



</style>
