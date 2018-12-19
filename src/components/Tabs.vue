<template>
	<div class="tabs_box">
		<el-tabs v-model="activePath" type="card" @tab-click="handleClick" @tab-remove="handleRemove">
			<el-tab-pane :name="tab.path" :key="tab.path" v-for="(tab,index) in tabs" :closable="index!=0">
			<span slot="label">
			 	<i :class="tab.icon"></i>&nbsp;<span v-text="tab.title"></span>
			</span>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import {mapState,mapMutations} from "vuex";
	export default{
		data(){
			return{}
		},
		computed:{
			...mapState(['tabs']),
			activePath:{
				set(path){console.log(path);this.switchTab(path)},
				get(){return this.$store.state.activePath;},
			},
			
		},
		methods:{
			...mapMutations(['switchTab',"removeTab"]),
			handleClick(tab){this.$router.push(this.activePath);},
			handleRemove(path){
				this.removeTab(path);
				this.$router.push(this.activePath)}
		}
	}
	
</script>

<style>

</style>