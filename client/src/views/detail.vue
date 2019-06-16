<template>
    <div class="detail">
        <Header>
            <span>办公室{{type=='overtime'?'加班':'休假'}}申请表</span>
            <div></div>
        </Header>
        <div class="detail-cont">
            <div class="person">
                <dl>
                    <dt>
                        <img :src="dataiList.avatar" alt="">
                    </dt>
                    <dd>
                        <p><span class="bef">申请人姓名</span><span>{{dataiList.nickname}}</span></p>
                        <p><span class="bef">申请单号</span><span>{{dataiList.applicationNumber}}</span></p>
                        <p><span class="bef">发起时间</span><span>{{getStart(dataiList.updated_at)}}</span></p>
                    </dd>
                </dl>
            </div>
            <div class="letter">
                <div class="text"><p>申请信息</p></div>
                <div class="letter-cont">
                    <p><span>{{type=='overtime'?'加班':'休假'}}日期<i>*</i></span><span>{{getStart(dataiList.startTime)}}</span></p>
                    <p><span>{{type=='overtime'?'加班':'休假'}}类型</span><span>{{getType(dataiList.endTime)}}</span></p>
                    <p><span>{{type=='overtime'?'加班':'休假'}}发起时间<i>*</i></span><span>{{getHour(dataiList.updated_at)}}</span></p>
                    <p><span>{{type=='overtime'?'加班':'休假'}}截止时间<i>*</i></span><span>{{getHour(dataiList.create_at)}}</span></p>
                    <p><span>共计时数</span><span>{{getTime(dataiList.startTime,dataiList.endTime)}}</span></p>
                </div>
            </div>
            <div class="reason">
                <div class="text"><p>{{type=='overtime'?'加班':'休假'}}事由<i>*</i></p></div>
                <div class="reason-cont">
                    <p>{{dataiList.describes}}</p>
                </div>
            </div>
            <div class="adjunct">
                <div class="text"><p><span><i class="iconfont icon-biaoqian"></i>附件</span><span>共4个</span></p></div>
                <div class="adjunct-cont">
                    <ul>
                        <li v-for="(item,index) in dataiList.annex" :key="index">
                            <img :src="'http://localhost:3000'+item.url" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="foot">
           <div @click="examineFn">
               <p class="iconfont icon-7tian"></p>
               <p>审批历史</p>
           </div>
               <button @click="backFn">退回</button>
          
               <button>同意</button>
          
        </div>
    </div>
</template>
<script>
import request from '../utils/request';
import Header from "../components/head";
export default {
    props:{
        type:String,
        id:String
    },
    components:{
        Header
    },
    data(){
        return {
            dataiList:{},
            applyType:''
        }
    },
    computed:{

    },
    methods:{
        getdata(){
             request.get(`/api/apply/${this.type}`,{params:{applicationNumber:this.id}}
             ).then(res=>{
                this.dataiList=res.data;
            })
        },
         getStart(startTime){
            let date=new Date(startTime);
            return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        },
        getTime(startTime,endTime){
            let start=new Date(startTime);
            let end=new Date(endTime);
            return ((end-start) / 3600 / 1000).toFixed(1)
        },
        getHour(times){
            let hour=new Date(times);
            return `${hour.getHours()}:${hour.getMinutes()}`
        },
        getType(types){
            let date=new Date(types);
            return date.getDay()===(6||7)?'双休日加班':'工作日加班';
        },
        examineFn(){
            this.$router.push(`/examine/${this.dataiList.applicationNumber}`)
        },
        backFn(){
            this.$router.back();
        }
    },
    created(){
       this.getdata();
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../static/fonts/iconfont.css";
@import '../static/js/_minix.scss';
@import '../static/js/common.scss';
    .detail{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        background:#f4f4f4;
    }
    .head{
        background:#096241;
        color:white;
    }
    .detail-cont{
        flex:1;
        overflow:auto;
    .person{
        width:100%;
        height:rem(200px);
        border-radius: 0 0 rem(50px) rem(50px);
        background:#096241;
        dl{
            width:90%;
            height:80%;
            margin-left:5%;
            display: flex;
            dt{
                flex:2;
                margin-top:rem(30px);
                img{
                    width:80%;
                    height:40%;
                    margin:5%;
                    border-radius: 50%;
                }
            }
            dd{
                flex:8;
                margin-top:rem(30px);
                p{
                    width:95%;
                    height:rem(30px);
                    margin-left:5%;
                    line-height: rem(30px);
                    color:white;
                    font-size:rem(14px);
                    .bef{
                       display: inline-block;
                       width:40%;
                    }
                }
            }
        }
    }
    .letter{
        width:90%;
        height:rem(260px);
        background: white;
        border-radius: 5px;
        margin-top:rem(-50px);
        margin-left:5%;
        font-size:14px;
        .text{
           width:100%;
           height:rem(40px);
           border-bottom:1px solid #ccc;
           p{
               width:95%;
               height:rem(40px);
               margin-left:5%;
               line-height: rem(40px);
           }
        }
        .letter-cont{
            width:90%;
            height:rem(220px);
            margin-left:5%;
            p{
                width:100%;
                height:rem(42px);
                line-height: rem(42px);
                display: flex;
                justify-content: space-between;
                span:nth-child(1){
                    color:gray;
                    i{
                        color:red;
                    }
                }
            }
        }
    }
    .reason{
        width:90%;
        height:rem(120px);
        background:white;
        border-radius: 5px;
        margin-top:rem(20px);
        margin-left:5%;
        font-size:14px;
        .text{
           width:100%;
           height:rem(40px);
           border-bottom:1px solid #ccc;
           p{
               width:95%;
               height:rem(40px);
               margin-left:5%;
               line-height: rem(40px);
               i{
                   color:red;
               }
           }
        }
        .reason-cont{
            width:90%;
            height:rem(80px);
            margin-left:5%;
            p{
                width:100%;
                height:rem(30px);
                line-height: rem(30px);
            }
        }
    }
    .adjunct{
        width:90%;
        height:auto;
        background: white;
        border-radius: 5px;
        margin-top:rem(20px);
        margin-left:5%;
        font-size: 14px;
        .text{
            width:100%;
            height:rem(60px);
            line-height: rem(60px);
            border-bottom:1px solid #ccc;
            p{
                width:90%;
                height:rem(60px);
                margin-left:5%;
                display: flex;
                justify-content: space-between;
                i{
                    color:skyblue;
                    margin-right:5px;
                }
                span:nth-child(2){
                    color:#bbb;
                }
            }
        }
        ul{
            width:100%;
            height:rem(80px);
            li{
               width:30%;
               height:rem(80px);
               margin:0 1%;
               display: inline-block;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
    }
}
    .foot{
        width:100%;
        height:rem(45px);
        display: flex;
        text-align: center;
        // line-height: 45px;
        div{
            flex:3.3;
            background:white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p{
                flex:1;
                line-height: rem(15px);
            }
            p:nth-child(1){
                font-size: 20px;
                margin-top:rem(5px);
            }
            p:nth-child(2){
                font-size: 12px;
            }
        }
        button{
            flex:3.3;
            background:none;
            border:0;
            outline:0;
            color:white;
        }
         button:nth-child(2){
            background:#3F4953;
        }
        button:nth-child(3){
            background:#096241;
        }
      
       
       
    }
</style>