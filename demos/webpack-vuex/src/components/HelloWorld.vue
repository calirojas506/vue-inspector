<template>
  <div class="hello">
    <h2 class="text-center">{{ msg }} <small>({{getTotalStudents}})</small></h2>
    <div class="alert alert-warning" v-if="!getTotalStudents">
      No students registered. Please, use the menu to register a new student
      or <router-link to="/registration" class="alert-link">enter here</router-link>.
    </div>
    <div class="table-responsive" v-else>
      <table class="table table-hover table-striped text-left">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th class="text-center">Approved</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in getStudents" :key="index">
            <td>{{student.firstName}}</td>
            <td>{{student.lastName}}</td>
            <td class="text-center">
              <i class="fa" :class="{'fa-check': student.approved, 'fa-remove': !student.approved}"></i>
            </td>
            <td class="text-right">
              <button class="btn btn-default btn-sm" title="Delete" @click="deleteStudent(index)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" class="text-center">
              <i class="fa fa-check"></i>
              Approved: {{getApprovedStudents.length}}
              &nbsp;
              <i class="fa fa-remove"></i>
              Not approved: {{getNotApprovedStudents.length}}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Registered students'
      }
    },
    computed: {
      ...mapGetters([
        'getStudents',
        'getTotalStudents',
        'getApprovedStudents',
        'getNotApprovedStudents'
      ])
    },
    methods: {
      ...mapActions([
        'addStudent',
        'deleteStudent'
      ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
