<template>
	<div class="tabs_box">
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick" @tab-remove="handleRemove">
			<el-tab-pane :name="tab.path" :key="index" v-for="(tab,index) in tabs" :closable="index!=0">
			<span slot="label">
			 	<i :class="tab.icon"></i>&nbsp;<span v-text="tab.label"></span>
			</span>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tabs: [{
					label: '首页',
					path: '/home',
					icon: 'fa fa-home'
				}, {
					label: '布局',
					path: '/layerout',
					icon: 'fa fa-bars'
				}, {
					label: '容器',
					path: '/container',
					icon: 'fa fa-arrows-alt'
				}, {
					label: '图标',
					path: '/icon',
					icon: 'fa fa-adn'
				}],
				activeName: '/home',
			}
		},
		methods:{
			handleClick(){this.$router.push(this.activeName);},
			handleRemove(name){this.tabs=this.tabs.filter(item=>item.path!=name);this.activeName=this.tabs[0].path;this.$router.push(this.activeName)},
		}
	}
	
</script>

<style>

</style>