<template>
    <div class="search">
        <div class="search-head">
            <input type="text" placeholder="搜索"><span @click="cencalFn">取消</span>
        </div>
        <div class="text">
            <p>搜索指定内容</p>
            <p><span>加班类型</span>|<span>发起时间</span>|<span>加班日期</span></p>
            <p><span>申请单号</span>|<span>加班时数</span></p>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        cencalFn(){
            this.$router.back();
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    *{
        list-style: none;
        padding:0;
        margin:0;
        font-size: 14px;
    }
    html,body,#app,.search{
        width:100%;
        height:100%;
    }
    .search{
        display: flex;
        flex-direction: column;
    }
    .search-head{
        width:90%;
        height:45px;
        line-height: 45px;
        margin-left:5%;
        input{
            display: inline-block;
            width:80%;
            height:25px;
            border:1px solid #ccc;
        }
        span{
            display: inline-block;
            width:18%;
            height:25px;
            text-align: center;
            color:#096241;
        }
    }
    .text{
        width:80%;
        height:150px;
        margin-left:10%;
        margin-top:50px;
        p{
            width:100%;
            height:40px;
            line-height: 40px;
            display: flex;
            justify-content:space-around;
        }
        p:nth-child(1){
            color:gray;
        }
        p:nth-child(2){
            color:#096241;
        }
        p:nth-child(3){
            color:#096241;
        }
    }
</style>