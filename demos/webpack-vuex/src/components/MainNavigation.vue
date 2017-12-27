<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
        data-target="#navbar" aria-expanded="false" aria-controls="navbar" @click="toggleMenu">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">Demo</router-link>
      </div>
      <div id="navbar" class="navbar-collapse collapse" :class="{'in': menuIsOpen}">
        <ul class="nav navbar-nav">
          <li v-for="(item, index) in menuOptions" :key="index"
          :class="{'active': $route.path == item.link}">
            <router-link :to="item.link">{{item.text}}</router-link>
          </li>
        </ul>
      </div><!--/.nav-collapse -->
    </div><!--/.container-fluid -->
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        menuIsOpen: false,
        menuOptions: [
          {text: 'List', link: '/'},
          {text: 'Register', link: '/registration'}
        ]
      }
    },
    methods: {
      toggleMenu () {
        this.menuIsOpen = !this.menuIsOpen
      }
    },
    watch: {
      '$route' () {
        this.menuIsOpen = false
      }
    }
  }
</script>

<style>
  .navbar-default{
    background-color: #35495E;
  }
  a.navbar-brand{
    color: #fff !important;
  }

  .navbar-default .navbar-nav>li>a{
    color: #fff;
  }
  .navbar-default .navbar-nav>li>a:hover{
    color: #41B883;
  }
  .navbar-default .navbar-nav>.active>a,
  .navbar-default .navbar-nav>.active>a:focus,
  .navbar-default .navbar-nav>.active>a:hover{
    background: #41B883;
    color: #fff;
  }
  .navbar-default .navbar-toggle{
    background: #fff;
    border: 0;
  }
</style>

