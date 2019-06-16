<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import './static/js/common.scss';
  *{
    list-style: none;
    padding:0;
    margin:0;
}
html,body,#app{
  width:100%;
  height:100%;
}
</style>
