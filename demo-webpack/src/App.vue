<template>
  <div id="app">
    <!-- add vue inspector -->
    <vue-inspector style="text-align:left"/>
    <link rel="stylesheet" href="../static/vue-inspector/vue-inspector.css">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>
<script>
  //import vue
  import Vue from 'vue'
  //add vue to window
  window.Vue = Vue
  //load vue-inspector script
  require('../static/vue-inspector/vue-inspector-latest.min.js')

  export default {
    name: 'app'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
