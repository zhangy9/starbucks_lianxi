<template>
    <div class="head">
        <span class="back" @click="backFn">←</span><slot></slot>
    </div>
</template>
<script>
export default {
    props:["title"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        backFn(){
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
@import '../static/js/_minix.scss';
@import '../static/js/common.scss';
    *{
        list-style: none;
        padding:0;
        margin:0;
    }
    .head{
        width:100%;
        @include height(50px);
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .back{
            padding-left:rem(20px);
        }
        .icon{
            padding-right:rem(20px);
            .iconfont{
                padding:0 5px;
            }
        }
        div{
            width:rem(20px);
        }
    }
</style>