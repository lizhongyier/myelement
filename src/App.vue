<template>
	<div id="app">
		
		<header>
		</header>
		<aside>
			<aside-nav></aside-nav>
		</aside>
		<main>
		<router-view></router-view>
		</main>

	</div>

</template>

<script>
	import AsideNav from "@/components/AsideNav.vue"
	export default {

		data() {
			return {
			}
		},
		components:{
			AsideNav
		},
		
		methods: {

		}

	}
</script>

<style>
	html,
	body,
	#app {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
	}
	
	header {
		width: 100%;
		height: 50px;
		position: fixed;
		top: 0;
		left: 0;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
	}
	
	aside {
		position: fixed;
		top: 0;
		left: 0;
		background-color: #20222A;
		height: 100%;
		width: 220px;
		color: #FFFFFF;
		overflow: hidden;
		overflow-y: auto;
	}
	
	main {
		padding: 15px;
		box-sizing: border-box;
		position: fixed;
		top: 60px;
		left: 220px;
		right: 0;
		bottom: ;
		overflow: hidden;
		overflow-y: auto;
	}
</style>