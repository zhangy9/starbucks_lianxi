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
        .tabs-item{
            width:100%;
            height:80px;
            p{
                width:30%;
                height:30px;
                margin-top:25px;
                float:left;
                font-size: 16px;
                text-align: center;
                line-height: 30px;
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