<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <!-- add vue-inspector component to your app -->
    <vue-inspector/>
  </div>
</template>

<script>
  //copy the following lines to use vue-inspector with webpack
  // start ----->
  import Vue from 'vue'

  window.Vue = Vue

  //use your vue-inspector path
  require('../../../dist/js/vue-inspector.min.js')
  require('../../../dist/css/vue-inspector.min.css')
  // <----- end

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
