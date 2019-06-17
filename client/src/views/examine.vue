<template>
    <div class="examine">
        <Header>
            <span>审批历史</span>
            <div></div>
        </Header>
        
        <div class="cont">
            <div class="nav"></div>
            <div class="person">
                <p><span class="act">申请人</span><span>{{id}}</span></p><p><span class="act">部门</span><span>星巴克运营部</span></p>
                <p><span class="act">员工职务</span><span>P2</span></p><p><span class="act">员工编号</span><span>46451345318</span></p>
            </div>
            <div class="conts">
                <div class="item">
                    <div class="times">
                        <p>2018-01-08</p>
                        <p>21:58</p>
                    </div>
                    <dl v-for="(its,ind) in list" :key="ind">
                        <dt>
                            <img :src="its.avatar" alt="">
                        </dt>
                        <dd>
                            <p>{{its.nickname}}</p>
                            <p>主管循环审批</p>
                            <div class="yijian">
                                <b>审批意见:{{its.remark}}</b>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../components/head";
import request from "../utils/request";
export default {
    props:{
        id:String
    },
    components:{
        Header
    },
    data(){
        return {  
            list:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        let applicationNumber=this.id;
        request.get('/api/task/history',{params:{applicationNumber}}).then(res=>{
            this.list=res.data;
            console.log(this.list)
        })
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import '../static/js/_minix.scss';
    @import '../static/js/common.scss';
    *{
        list-style: none;
        padding:0;
        margin:0;
    }
    html,body,#app,.examine{
        width:100%;
        height:100%;
    }
    .examine{
        display: flex;
        flex-direction: column;
    }
    .head{
        background:#096241;
        color:white;
    }
    .nav{
        width:100%;
        height:rem(80px);
        background:#096241;
        border-radius: 0 0 rem(50px) rem(50px);
    }
    .cont{
        width:100%;
        height:rem(300px);
        .person{
            width:90%;
            height:rem(100px);
            margin-left:5%;
            // position:absolute;
            // left:0;
            // top:90px;
            margin-top:rem(-40px);
            border:1px solid #ccc;
            border-radius: rem(10px);
            background:white;
            font-size: 14px;
            p{
                width:40%;
                height:rem(50px);
                line-height: rem(50px);
                margin:0 5%;
                float: left;
                display: flex;
                justify-content: space-between;
                .act{
                    color:gray;
                }
            }
        }
        .conts{
            width:100%;
            height:auto;
            .item{
                width:90%;
                height:rem(100px);
                margin:20px 5%;
                .times{
                    width:30%;
                    float: left;
                    p{
                        width:100%;
                        height:rem(30px);
                        line-height: rem(30px);
                        font-size: 14px;
                        color:gray;
                    }
                }
                dl{
                    width:70%;
                    float: left;
                    display: flex;
                    dt{
                        flex:3;
                        img{
                            width:80%;
                            height:80%;
                        }
                    }
                    dd{
                        flex:7;
                        font-size: 14px;
                        p{
                            width:100%;
                            height:rem(30px);
                            line-height: rem(30px);
                            color:gray;
                        }
                        .yijian{
                            width:100%;
                            height:rem(30px);
                            line-height: rem(30px);
                            background:#ccc;
                            color:gray;
                        }
                    }
                }
            }
        }
    }
</style>