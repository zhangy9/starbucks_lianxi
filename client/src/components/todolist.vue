<template>
    <div class="todolist">
        <div class="item-con" v-for="(item,index) in list" :key="index" @click="TodoDetail(item.list_type,item.applicationNumber)">
            <div class="item">
                <div class="item-head">
                    <span class="corC">{{item.applicationNumber}}</span><span><i class="iconfont icon-faxiandingdan"></i>待审批</span>
                </div>
                <div class="item-person">
                    <p><span class="corC">申请人</span><span>{{item.nickname}}</span></p><p><span class="corC">加班类型</span><span>{{getType(item.endTime)}}</span></p> 
                </div>
                <div class="item-date">
                    <p><span class="corC">加班日期</span><span>{{getStart(item.create_at)}}</span></p><p><span class="corC">加班时数</span><span>{{getTime(item.startTime,item.endTime)}}</span></p> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        list:Array
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
        getStart(startTime){
            let date=new Date(startTime);
            return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        },
        getTime(startTime,endTime){
            let start=new Date(startTime);
            let end=new Date(endTime);
            return ((end-start) / 3600 / 1000).toFixed(1)
        },
        TodoDetail(type,id){
           this.$router.push({
               name:'detail',
               params:{
                   type,
                   id
               }
           });
        },
        getType(types){
            let date=new Date(types);
            return date.getDay()===(6||7)?'双休日加班':'工作日加班';
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
    // .head{
    //     background:white;
    //     color:black;
    // }
    .todolist{
        width:100%;
        height:auto;
        background: #f4f4f4;
    }
    .item-con{
        width:100%;
        height:rem(120px);
        margin-bottom:10px;
        background: white;
    }
    .item{
        width:90%;
        height:rem(120px);
        margin-left:5%;
        font-size:14px;
       
        .corC{
            color:#bbb;
        }
        .item-head{
            width:100%;
            height:rem(40px);
            line-height: rem(40px);
            display: flex;
            justify-content: space-between;
            .iconfont{
                color:yellow;
                margin-right:5px;
            }
        }
        .item-person{
            width:100%;
            height:rem(40px);
            line-height: rem(40px);
            display: flex;
            p{
                flex:4;
                display: flex;
                justify-content: space-between;
            }
            p:nth-child(1){
                 margin-right:5%;
            }
        }
        .item-date{
             width:100%;
            height:rem(40px);
            line-height: rem(40px);
            display: flex;
            p{
                flex:4;
                display: flex;
                justify-content: space-between;
            }
            p:nth-child(1){
                 margin-right:5%;
            }
        }
    }
</style>