import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Layout from './views/Layout.vue'
import Container from './views/Container.vue'
import Icon from './views/Icon.vue'
import Cascader from './views/Cascader.vue'
import Input from './views/Input.vue'
import Score from './views/Score.vue'
import LeaveTips from './views/LeaveTips.vue'
import TotalTips from './views/TotalTips.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/layerout',
      name: 'layerout',
      component: Layout
    },
    {
      path: '/container',
      name: 'container',
      component: Container
    },
    {
      path: '/icon',
      name: 'icon',
      component: Icon
    },
    {
      path: '/cascader',
      name: 'cascader',
      component: Cascader
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/score',
      name: 'score',
      component: Score
    },
    {
      path: '/leavetips',
      name: 'leavetips',
      component: LeaveTips
    },
    {
      path: '/totaltips',
      name: 'totaltips',
      component: TotalTips
    },
   
  ]
})
