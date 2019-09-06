<template>

	<div>
		<h1>Foo header</h1>
		<router-link to="Bar">Bar</router-link>
		<router-link to="Todo">Todo</router-link>
		<h2>{{foo}}</h2>
	 
		<!-- <button v-on:click="changeBg('bg-main')">foo click</button> -->
	</div>
</template>

<script>
	//import Vue from 'vue/dist/vue.js'
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	const axios = require('axios');
	export default {
		name: 'Foo',
		props: {
			'msg': String
		},
		data: function() {
			return {
				foo: "foo is foo test"
			}
		},
		computed: {

		 
			test: function() {
				return 'test' + this.foo;
			}
		},
		created: function() {
			this.changeBg('bg-welcomewppp');
			//alert("foo created")
		},
		methods: {

			...mapActions([
				'changeBg'

			])

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
