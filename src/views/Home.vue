<template>
 <el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>Home</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		
		
  	<h2>{{count}}</h2>
  	<h2>{{msg}}</h2>
  	<h2>{{"数组："}}{{$store.state.arr}}</h2>
  	<h2>{{$store.getters.odd}}</h2>
  	<h2>{{$store.getters.even}}</h2>
  	<h2>{{'奇数：'+odd}}</h2>
  	<h2>{{'偶数：'+even}}</h2>
  	<button @click="add(5)">+</button>
  	{{count}}
  	<button @click="reduce(5)">-</button><br />
  	<button @click="addAction">dispatch</button>
  	
  	
 </el-card>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
  name: 'home',
  computed:{
  	//计算属性的形式
//	count(){return this.$store.state.count};
    ...mapState(['count','msg']),
    ...mapGetters(['odd','even'])

  },
  methods:{
  	...mapMutations(['add','reduce']),
  	...mapActions(['addAction'])
  },
  components: {
  	
  }
}
</script>
