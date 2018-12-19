import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	count:0,
  	msg:'Hello',
  	arr:[1,2,3,4,5,6,7,8,9,0],
  	tabs: [{
					title: '首页',
					path: '/home',
					icon: 'fa fa-home'
				}, {
					title: '布局',
					path: '/layerout',
					icon: 'fa fa-bars'
				}, {
					title: '容器',
					path: '/container',
					icon: 'fa fa-arrows-alt'
				}, {
					title: '图标',
					path: '/icon',
					icon: 'fa fa-adn'
				}],
		activePath: '/home',

  },
  //好比是store的计算属性
  getters:{
  	odd(state){
  		return state.arr.filter(item=>item%2!=0);
  	},
  	even(state){
  		return state.arr.filter(item=>item%2==0);
  	},
  },
  mutations: {
  	add(state,n){
  	state.count+=n;
		setTimeout(()=>{this.state.count=0;},1000)
  	},
  	reduce(state,n){
  		state.count-=n;
  	},
  	switchTab(state,path){
  		this.state.activePath = path;
  	},
  	addTab(state,tab){
  		for(let i=0;i<state.tabs.length;i++){
  			if(state.tabs[i].path==tab.path)
  			{this.state.activePath = tab.path;
  				return}
  		}
  		state.tabs.push(tab);
  		this.state.activePath = tab.path;
  	},
  	removeTab(state,path){
//		state.tabs = state.tabs.filter(item=>item.path!=path);
  		state.tabs = state.tabs.filter((item)=>{return item.path!=path});
  		if(state.activePath==path){state.activePath="/home"}
  	}
  },
  actions: {
  	addAction(content){
  		console.log("start action");
  		setTimeout(()=>{content.commit('add', 10000);console.log("actioning");},2000);
  		console.log("end action");
  	}

  }
})
