<template>
    <div class="tabs-item">
        <p :class="{active:tag==='overtime'}"
           @click="tablechange('overtime')">加班</p>
        <p :class="{active:tag==='vacation'}"
           @click="tablechange('vacation')">休假</p>
    </div>
</template>
<script>
export default {
    props:{
        tag:String
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
        tablechange(type){
           
            this.$emit('change',type)
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
    .tabs-item{
        width:100%;
        height:rem(80px);
        p{
            width:30%;
            height:rem(30px);
            margin-top:rem(25px);
            float:left;
            font-size: 16px;
            text-align: center;
            line-height: rem(30px);
            border:1px solid #096241;
            background:white;
            color:#096241; 
        }
        p:nth-child(1){
            border-radius: 20px 0 0 20px;
            margin-left:20%;
        }
        p:nth-child(2){
            border-radius:  0 20px 20px 0 ;
        }
        .active{
            background:#096241;
            color:white;
        }
    }

</style>