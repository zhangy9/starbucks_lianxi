<template>
    <div class="login">
        <Header :title="title" />
        <div class="cont">
            <div class="inp">
                <p>用户名：</p><input type="text" v-model="user">
            </div>
            <div class="pwd">
                <p>密码：</p><input type="password" v-model="pwd">
            </div>
            <button @click="clickFn">登录</button>
        </div>
    </div>
</template>
<script>
import Header from "../components/head";
import request from '../utils/request';
export default {
    props:{

    },
    components:{
        Header
    },
    data(){
        return {
            title:"登录",
            user:'',
            pwd:'',
            phoneReg:/^1[356789]\d{9}$/
        }
    },
    computed:{

    },
    methods:{
        clickFn(){
            if(this.pwd.trim() !== '' && this.phoneReg.test(this.user)){
                request.post('/api/login',{
                    phone:this.user,
                    password:this.pwd
                }).then(data=>{
                    let {token}=data;
                    window.localStorage.setItem('token',token);
                    this.$router.back();
                }).catch(error=>{
                    alert(error.response.data.message)
                })
            }
            else{
                alert('密码和手机号输入有误')
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import '../static/js/_minix.scss';
    @import '../static/js/common.scss';
    .cont{
        width:100%;
        height:100%;
        .inp,.pwd{
            width:90%;
            height:rem(45px);
            margin-left:5%;
            font-size: 14px;
            margin-bottom:rem(30px);
            border-bottom:1px solid #ccc;
            p{
                width:20%;
                height:rem(45px);  
                display: inline-block;
            }
            input{
                width:80%;
                height:rem(45px);
                border:0;
                outline: none;
                display: inline-block;
            }
        }
        button{
            width:80%;
            height:rem(40px);
            background:green;
            color:white;
            border-radius: 20px;
            text-align: center;
            line-height: rem(40px);
            border:1px solid green;
            outline:none;
            margin-left:10%;
        }
    }
</style>