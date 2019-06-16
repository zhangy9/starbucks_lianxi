import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/views/shouye'
import Search from '@/views/search';
import Login from '@/views/login'
import Commit from '@/views/commit'
import Detail from '@/views/detail';
import Examine from "@/views/examine";



Vue.use(Router)

const router=new Router({
  routes: [
    {
      path:'/',
      redirect:'/shouye'
    },
    {
      path: '/shouye',
      meta:{
        title:"首页"
      },
      component: Shouye
    },
    {
      path:'/search',
      meta:{
        title:"搜索"
      },
      component:Search
    },
    {
      path:'/login',
      meta:{
        title:"登录"
      },
      component:Login
    },
    {
      path:'/commit/:type',
      meta:{
        title:""
      },
      component:Commit
    },
    {
      path:'/detail/:type/:id',
      name:'detail',
      meta:{
        title:"详情"
      },
      props:true,
      component:Detail
    },
    {
      path:'/examine/:id',
      name:'examine',
      props:true,
      component:Examine
    }
  ]
})

router.beforeEach((to,from,next)=>{
  document.title=to.meta.title;
  next();

})

export default router;
