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
	import {mapMutations} from "vuex";
	export default{
		data(){
		return{
//			nav:[] 
		}},
		methods:{
			open(key, keyPath) {
				console.log(key, keyPath);
			},
			close(key, keyPath) {
				console.log(key, keyPath);
			},
			getTab(path){
				console.log(path)
				for(let i=0;i<this.nav.length;i++){
					for(let j=0;j<this.nav[i].sub.length;j++){
						if(this.nav[i].sub[j].path==path){
							return this.nav[i].sub[j];
						}
					}
				}
				return false;
				
			},
			select(index, indexPath){
//				this.$router.push(index);
				console.log(index);
				console.log(indexPath);
				const tab = this.getTab(index);
				console.log(tab);
				if(tab){
					this.addTab(tab);
					console.log(tab);
					this.$router.push(index);
				}
			},
			...mapMutations(['addTab']),
		},
		created(){
			this.nav = require("../assets/admin.json");
		}
	}
	
	
</script>

<style>
</style>