<template>
    <div class="commit">
        <Header>
            <span v-if="type=='overtime'">加班申请表</span>
            <span v-else>休假申请表</span>
            <div></div>
        </Header>
        <div class="commit-cont">
            <div class="person">
                <dl>
                    <dt>
                        <img :src="userinfo.avatar" alt="">
                    </dt>
                    <dd>
                        <p><span class="bef">申请人姓名</span><span>{{userinfo.nickname}}</span></p>
                        <p><span class="bef">申请人姓名</span><span>秦艺超</span></p>
                    </dd>
                </dl>
            </div>
            <div class="letter">
                <div class="text"><p>申请信息</p></div>
                <div class="letter-cont">
                    <p>
                        <span>{{type=='overtime'?'加班':'休假'}}日期<i>*</i></span>
                        <el-date-picker
                        v-model="value3"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </p>
                    <p>
                        <span>{{type=='overtime'?'加班':'休假'}}类型</span>
                        <select v-model="userValue">
                            <option value="-1">默认选项</option>
                            <option v-for="(its,ind) in this[type+'Types']" :key="ind" :value="its.id">{{its.title}}</option>
                        </select>
                    </p>
                    <p>
                        <span>{{type=='overtime'?'加班':'休假'}}发起时间<i>*</i></span>
                        <el-time-picker
                            v-model="value1"
                            placeholder="任意时间点">
                        </el-time-picker>
                    </p>
                    <p>
                        <span>{{type=='overtime'?'加班':'休假'}}截止时间<i>*</i></span>
                        <el-time-picker
                            v-model="value2"
                            placeholder="任意时间点">
                        </el-time-picker>
                    </p>
                    <p>
                        <span>共计时数</span>
                    </p> 
                </div>
            </div>
            <div class="reason">
                <div class="text"><p>{{type=='overtime'?'加班':'休假'}}事由<i>*</i></p></div>
                <div class="reason-cont">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
            </div>
            <div class="adjunct">
                    
                <div class="text">
                    <p><span>附件<i class="iconfont icon-infenicon18"></i></span><span></span></p>
                    
                </div>
                <div class="adjunct-cont">   
                    <ul>
                        <li v-for="(item,index) in list" :key="index">
                            <img :src="'http://localhost:3000'+item.url" alt="">
                        </li> 
                        <li>
                            <p class="fileAdd">+</p>
                            <input type="file" class="fileInp" @change="addpic" ref="filebtn">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="foot">
          
               <button @click="cencalFn">取消</button>
          
               <button @click="submitFn">提交</button>
     
        </div>
    </div>
</template>
<script>
import Header from '../components/head';
import IsFile from "../utils/isFile";
import request from '../utils/request';
// import axios from 'axios';
import {mapState,mapActions} from 'vuex';
export default {
    props:{

    },
    components:{
        Header
    },
    data(){
        return {
            type:'',
            value1:"",
            value2:"",
            value3:"",
            input:"",
            userValue:"",
            overtimeTypes:[
                {
                    id:1,
                    title:"双休日加班"
                },
                {
                    id:1,
                    title:"节假日加班"
                },
                {
                    id:1,
                    title:"工作日加班"
                }
            ],
            vacationTypes:[
                {
                    id:2,
                    title:"年假"
                },
                {
                    id:2,
                    title:"调休"
                }
            ],
            list:[]
        }
    },
    computed:{
        ...mapState(['userinfo'])
    },
    methods:{
        ...mapActions(['getUserInfo']),
        addpic(e){
            let userfile=this.$refs.filebtn.files[0];
            let isCheck=new IsFile(userfile,{
                type:['jpg','png','gif','jpeg'],
                size:1
            });
            if(isCheck.isType() && isCheck.isSize()){
               
                const formate=new FormData();
                formate.append('file',userfile);
                request.post('/api/upload',formate).then(res=>{
                    this.list.push(res);
                })
            }
            else{
                alert("不符合")
            }
        },
        cencalFn(){
            this.$router.back();
        },
        submitFn(){
           let obj={
               annex:this.list,
               describe:this.input,
               startTime:this.value1,
               endTime:this.value2,
               type:this.userValue
           }
           console.log(obj);
           request.post(`/api/apply/${this.type}`,obj).then(res=>{
               console.log(res)
           });
           this.$router.push('/shouye');
        }
    },
    created(){
        this.type=this.$router.history.current.params.type;
        this.getUserInfo();
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../static/fonts/iconfont.css";
    @import '../static/js/_minix.scss';
    @import '../static/js/common.scss';
    *{
        list-style: none;
        padding:0;
        margin:0;
    }
    .commit{
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
    .commit-cont{
        flex:1;
        overflow:auto;
        .person{
            width:100%;
            height:180px;
            border-radius: 0 0 rem(50px) rem(50px);
            background:#096241;
            dl{
                width:90%;
                height:90%;
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
                        font-size:14px;
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
            border-radius: rem(5px);
            margin-top:rem(-50px);
            margin-left:5%;
            font-size:14px;
            .text{
            width:100%;
            height:rem(40px);
            border-bottom:rem(1px) solid #ccc;
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
            border-radius: rem(5px);
            margin-top:rem(20px);
            margin-left:5%;
            font-size:14px;
            .text{
            width:100%;
            height:rem(40px);
            border-bottom:rem(1px) solid #ccc;
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
            height:rem(140px);
            background: white;
            border-radius: rem(5px);
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
                        color:yellow;
                        margin-left:rem(5px);
                    }
                    span:nth-child(2){
                        color:#bbb;
                    }
                }
                
            }
            .adjunct-cont{
                width:100%;
                height:rem(80px);
                 ul{
                    width:100%;
                    height:rem(80px);
                    li{
                    width:30%;
                    height:rem(80px);
                    margin:0 1%;
                    float:left;
                    position: relative;
                        img{
                            width:80%;
                            height:80%;
                            margin:10%;
                        }
                        .fileAdd{
                            width:100%;
                            height:rem(80px);
                            border:1px solid #ccc;
                            text-align: center;
                            line-height: rem(80px);
                            font-size:25px;
                            color:orange;
                        }
                        .fileInp{
                            width:100%;
                            height:100%;
                            opacity: 0;
                            position: absolute;
                            left:0;
                            top:0;
                        }
                    }
                }
            }
           
        }
    }
    .foot{
        width:100%;
        height:rem(45px);
        // display: flex;
        text-align: center;
        line-height:rem(45px);   
        button{
            float:left;
            height:100%;
            border:0;
            outline:0;
            &:nth-child(1){
                background:white;
                width:40%;
                color:black;
            }
            &:last-child{
                background:#3F4953;
                width:60%;
                color:white;
        }
    }
        
       
}
</style>