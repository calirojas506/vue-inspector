<template>
  <div id="app" class="container">
    <main-navigation/>
    <div class="row">
      <div class="col-sm-12 text-center col-md-8 col-md-offset-2">
        <h1>1st class</h1>
        <img src="./assets/logo.png" class="center-block img-responsive logo" alt="Vue">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-8 col-md-offset-2">
        <router-view/>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 text-center col-md-8 col-md-offset-2">
        <footer-component/>
      </div>
    </div>
    <vue-inspector :is-minimized="true" />
  </div>
</template>

<script>
  /* eslint no-undef:0 */

  // copy the following lines to use vue-inspector with webpack
  // start ----->
  import Vue from 'vue'
  import MainNavigation from '@/components/MainNavigation'
  import FooterComponent from '@/components/FooterComponent'
  window.Vue = Vue
  // use your vue-inspector path
  require('../../../dist/js/vue-inspector.min.js')
  require('../../../dist/css/vue-inspector.min.css')
  // <----- end
  export default {
    name: 'app',
    components: {
      MainNavigation,
      FooterComponent
    },
    data: function () {
      return {
        appName: 'Test app',
        appVersion: '1.0.0',
        appContributors: ['Peter Pan', 'Fred F.', 'Homer H.'],
        changeLog: [
          {id: 1, theDate: new Date(), author: 'Peter Parker'},
          {id: 2, theDate: new Date(), author: 'Oscar D.'},
          {id: 3, theDate: new Date(), author: 'Peter Parker'}
        ]
      }
    },
    computed: {
      appFullName: function () {
        return this.appName + ' ' + this.appVersion
      },
      getParkerChanges: function () {
        return this.changeLog.filter(el => {
          return el.author === 'Peter Parker'
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 100px;
  }

  h1, h2, h3, .navbar-brand{
    font-family: 'Bungee', cursive;
  }

  body{
    background: #54E9FF url('assets/bg-natural.jpg') bottom center no-repeat;
  }

  .logo{
    width: 280px;
  }

  .table{
    background: #fff;
    border-radius: 3px;
  }
</style>
