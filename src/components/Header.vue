<template>
	<el-row type="flex" justify="start">
		<el-col :span="6" style="padding: 10px;">
			<el-autocomplete  prefix-icon="el-icon-search"  clearable value-key="name"  class="inline-input" v-model="result" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
		</el-col>
		<el-col :span="18">
	<div class="line"></div>
	<el-menu :default-active="activeIndex+''" class="el-menu-demo hidden-md-and-down" mode="horizontal" @select="select" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
		<el-menu-item index="1">处理中心</el-menu-item>
		<el-submenu index="2">
			<template slot="title">我的工作台</template>
			<el-menu-item index="2-1">选项1</el-menu-item>
			<el-menu-item index="2-2">选项2</el-menu-item>
			<el-menu-item index="2-3">选项3</el-menu-item>
			<el-submenu index="2-4">
				<template slot="title">选项4</template>
				<el-menu-item index="2-4-1">选项1</el-menu-item>
				<el-menu-item index="2-4-2">选项2</el-menu-item>
				<el-menu-item index="2-4-3">选项3</el-menu-item>
			</el-submenu>
		</el-submenu>
		<el-menu-item index="3" disabled>消息中心</el-menu-item>
		<el-menu-item index="4">
			<a href="https://www.ele.me" target="_blank">订单管理</a>
		</el-menu-item>
	</el-menu>
	</el-col>
	</el-row>

</template>

<script>
	import 'element-ui/lib/theme-chalk/display.css';
	export default {
		data() {
			return{
				activeIndex:1,
				funList:[],
				result:"",
			}
		},
		methods: {
			select() {},
			querySearch(queryString, cb){
				var list=this.funList;
				//queryString数组不是空的执行问号后面的，若空则为list
				
				var results=queryString ? list.filter(this.createFilter(queryString)) : list;
				console.log(results);
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return(funList) => {
					return(funList.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			handleSelect(val) {
				// 跳转到指定页面
				this.$router.push(val.path);
			},
			
		},
		created() {
			// 获取路由中所有的地址
			this.funList = [...this.$router.options.routes];
		}
	}
</script>

<style>
.inline-input{
	min-width: 150px;
}
</style>