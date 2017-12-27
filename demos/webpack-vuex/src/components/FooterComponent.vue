<template>
  <div class="footer-component">
    <h3>What is this?</h3>
    <p>
      This is a quick and simple demo created using webpack + vuex, just to demonstrate
      how vue-inspector works with both technologies.
    </p>
    <p>&nbsp;</p>
    <h3>Stay in touch</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in projectLinks" :key="index">
        <i class="fa" :class="item.icon"></i>
        <a :href="item.link">{{item.text}}</a>
      </li>
    </ul>
    <p class="text-center">
      Copyright &copy; 2017, Cali Rojas
    </p>
    <p class="text-center">
      Made in
      <i class="fa fa-heart"></i>
      Costa Rica
    </p>
    <p class="text-center">
      <a class="small label label-danger" target="_blank"
      href="https://www.freepik.com/free-vector/natural-landscape-cartoon_757699.htm">Background Designed by Freepik</a>
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        projectLinks: [
          {text: 'Twitter', link: 'https://twitter.com/calirojas506', icon: 'fa-twitter'},
          {text: 'GitHub', link: 'https://github.com/calirojas506/vue-inspector', icon: 'fa-github'}
        ]
      }
    }
  }
</script>

<style>
  .footer-component{
    margin-bottom: 500px;
    margin-top: 50px;
  }
</style>
