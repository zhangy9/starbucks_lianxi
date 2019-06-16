<template>
    <div class="shouye">
        <Header>
            <span>加班/休假</span>
            <p class="icon">
                <span class="iconfont icon-riqixuanze" ></span>
                <router-link to="/search" tag='i'><span class="iconfont icon-fangdajing"></span></router-link>
            </p>
        </Header>
        <main>
            <tableMenu @change="changeFn" />
            <tableNav @change="changeNav" :tag="dataOptions.type" />
            <todolist :list="list" />
        </main>
        <div class="btns" @click="maskOutFn">
            <p><i class="iconfont icon-jia"></i> 发起任务</p>
        </div>
        <div :class="['mask',flag?'':'changMask']" @click="maskInFn">
            <div class="dialog">
                <router-link to='/commit/overtime' tag="dl" class="goToWork">
                    <dt>
                        <p class="iconfont icon-dribbble"></p>
                    </dt>
                    <dd>加班</dd>
                </router-link>
                <router-link to="/commit/vacation" tag="dl" class="goToTrip">
                    <dt>
                        <p class="iconfont icon-weichat"></p>
                    </dt>
                    <dd>休假</dd>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script >
import Header from '../components/head';
import tableMenu from '../components/tableMenu';
import tableNav from '../components/tableNav';
import todolist from '../components/todolist';
import request from '../utils/request';
import {mapActions} from 'vuex';
export default {
    props:{

    },
    components:{
        Header,
        tableMenu,
        tableNav,
        todolist
    },
    data(){
        return {
            flag:false,
            dataOptions:{
                page:1,
                pageSize:10,
                craete_at:0,
                type:"overtime",
                status:0
            },
            list:null
        }
    },
    computed:{

    },
    methods:{
        ...mapActions(['getUserInfo']),
        maskOutFn(){
            this.flag=true;
        },
        maskInFn(){
             this.flag=false;
        },
        getTasklist(){
            request.get('/api/task/list',{params:{type:this.dataOptions.type,status:this.dataOptions.status}}).then(res=>{
                this.list=res.data;
                console.log(this.list)
            })
        },
        changeFn(status){
            this.dataOptions.status=status;
            this.dataOptions.type='overtime';
            this.getTasklist();
        },
        changeNav(type){
            this.dataOptions.type=type;
            this.getTasklist();  
        },
        
    },
    created(){
        this.getUserInfo();
        this.getTasklist();
    },
    mounted(){
        
    }
    //获取时间
    //let date=new Date();
    //  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate}`
    //格式：2019-6-10
}
</script>
<style lang="scss">
@import '../static/fonts/iconfont.css';
@import '../static/js/_minix.scss';
@import '../static/js/common.scss';
*{
    list-style: none;
    padding:0;
    margin:0;
}
html,body,#app{
    width:100%;
    height:100%;
}
.shouye{
    width:100%;
    @include height(100%);
    display: flex;
    flex-direction: column;
    position: relative;
    
}
main{
    flex:1;
    overflow:auto;
    width:100%;
    @include height(100%);

    
}
.btns{
        width:100px;
        height:40px;
        border-radius: 15px;
        background:#096241;
        color:white;
        position: absolute;
        right:20px;
        bottom:20px;
        i{
            color:white;
        }
        p{
            width:100%;
            height:100%;
            line-height: 40px;
            font-size:14px;
            text-align: center;
        }
    }
.mask{
    width:100%;
    height:100%;
    background: rgba(0,0,0,.3);
    position: fixed;
    left:0;
    right:0;
    
    .dialog{
        width:100%;
        height:150px;
        background: white;
        position: absolute;
        left:0;
        bottom:0;
        .goToWork{
            width:20%;
            height:50px;
            float:left;
            margin:50px 10% 0 15%;
            dt{
                width:100%;
                height:30px;
                line-height: 30px;
                text-align: center;
                p{
                    width:100%;
                    height:100%;
                    color:yellow;
                    font-size: 25px;
                }
            }
            dd{
                width:100%;
                height:20px;
                font-size: 14px;
                text-align: center;
            }
        }
        .goToTrip{
            width:20%;
            height:50px;
            float:left;
            margin:50px 15% 0 10%;
            dt{
                width:100%;
                height:30px;
                line-height: 30px;
                text-align: center;
                p{
                    width:100%;
                    height:100%;
                    color:#096241;
                    font-size: 25px;
                }
            }
            dd{
                width:100%;
                height:20px;
                font-size: 14px;
                text-align: center;
            }
        }
    }
}
.changMask{
     display: none;
}
</style>