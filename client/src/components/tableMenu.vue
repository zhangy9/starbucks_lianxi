<template>
    <div class="tabs">
        <dl v-for="item in navdata"
            :key="item.status" 
            :class="{active:index===item.status}"
            @click="changeActive(item.status)">
            <dt>
                <span :class="'iconfont '+item.icon"></span>
            </dt>
            <dd>{{item.title}}</dd>
        </dl>
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
            index:0,
            navdata:[
                {
                    title:"待处理",
                    icon:'icon-05',
                    status:0
                },
                {
                    title:"已发起",
                    icon:'icon-07',
                    status:1
                },
                {
                    title:"已处理",
                    icon:'icon-yibangding',
                    status:2
                }
            ]
        }
    },
    computed:{

    },
    methods:{
        changeActive(status){
            this.index=status;
            this.$emit('change',status);
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
    .tabs{
        width:100%;
        height:100px;
        background: white;
        box-shadow: 5px 5px 10px #f4f4f4;
        justify-content: flex-start;
        align-items: center;
        display: flex;
        dl{
            flex:2;
            width:100%;
            height:100%;
            color:#bbb;
            dt{
                text-align: center;
                span{
                    font-size: 20px;
                }
            }
            dd{
                width:100%;
                height:rem(30px);
                font-size: 16px;
                text-align: center;
                
            }
        }
        .active{
            color:#096241;
        }
    }
</style>