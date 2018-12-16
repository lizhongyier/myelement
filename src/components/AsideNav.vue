<template>
	
			<el-menu default-active="2" @select="select" class="el-menu-vertical-demo" background-color="#20222A" text-color="#fff" active-text-color="#ffd04b" @open="open" @close="close">
				<el-submenu :index="i+''" v-for="(item,i) in nav">
					<template slot="title">
						<i :class="item.icon"></i>
						<span v-text="item.title"></span>
					</template>
					<el-menu-item-group>
						<el-menu-item v-for="(sub,j) in nav[i].sub" v-text="sub.title" :index="sub.path" ></el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>

	
</template>

<script>
	export default{
		data(){
		return{
			nav: [{
					title: "Basic",
					icon: "el-icon-location",
					sub:[{
						title: "layerout布局",
						path: "/layerout"
					}, {
						title: "container布局",
						path: "/container"
					}, {
						title: "Icon 图标",
						path: "/icon"
					}]
				},{
					title: "Form",
					icon: "el-icon-location",
					sub:[{
						title: "Cascader 级联",
						path: "/cascader"
					}, {
						title: "Input 输入框",
						path: "/input"
					}]
				},{
					title: "Dta",
					icon: "el-icon-location",
					sub:[{
						title: "Score 成绩",
						path: "/score"
					}, {
						title: "LeaveTips 请假条",
						path: "/leavetips"
					}, {
						title: "TotalTips 综合",
						path: "/totaltips"
					},]
				}]
		}},
		methods:{
			open(key, keyPath) {
				console.log(key, keyPath);
			},
			close(key, keyPath) {
				console.log(key, keyPath);
			},
			select( index, indexPath){
				this.$router.push(index);
				
				console.log(index);
				console.log(indexPath);
			}


		}
	}
	
	
</script>

<style>
</style>