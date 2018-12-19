<template>
		<el-container id="app">
		  <el-aside width="220px">
		  	<aside-nav></aside-nav>
		  </el-aside>
		<el-container>
		    <el-header>
		    	<admin-header></admin-header>
		    	<admian-tabs></admian-tabs>
		    </el-header>
		    <el-main>
		    	<keep-alive>
		    	<router-view></router-view>
		    	</keep-alive>
		    </el-main>
		    <el-footer>©2018-2020 非凡学院</el-footer>
		</el-container>
		</el-container>
</template>

<script>
	import AsideNav from "@/components/AsideNav.vue";
	import AdminHeader from "@/components/Header.vue";
	import AdmianTabs from "@/components/Tabs.vue";
	
	export default {

		data() {
			return {
			}
		},
		components:{
			AsideNav,
			AdminHeader,
			AdmianTabs
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
	.el-header{
		height:100px!important;
		padding: 0px;
		background-color: #FFFFFF;
	}
	.el-header .el-row{
		margin-bottom: 0px;
	}
	.el-aside{
		background-color: #20222A!important;
	}
	.el-footer{
		background-color: #FFFFFF;
		line-height: 60px;
	}
	#app .el-header{
		padding-left: 0;
		padding-right: 0;
	}
</style>