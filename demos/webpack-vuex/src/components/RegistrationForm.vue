<template>
  <div clas="registration">
    <h2 class="text-center">New student</h2>
    <form @submit.prevent="saveStudent" @reset.prevent="resetForm">
      <div class="form-group">
        <label for="" class="control-label">First name:</label>
        <div class="input-group">
          <input type="text" class="form-control input-md" required v-model.trim="firstName">
          <span class="input-group-addon">
            <i class="fa" :class="{'fa-check': firstName != '', 'fa-exclamation-triangle': firstName == ''}"></i>
          </span>
        </div>
      </div>
      <div class="form-group">
        <label for="" class="control-label">Last name:</label>
        <div class="input-group">
          <input type="text" class="form-control input-md" required v-model.trim="lastName">
          <span class="input-group-addon">
            <i class="fa" :class="{'fa-check': lastName != '', 'fa-exclamation-triangle': lastName == ''}"></i>
          </span>
        </div>
      </div>
      <div class="form-group">
        <label for="" class="control-label">Approved:</label>
        <div class="input-group">
          <select class="form-control input-md" v-model="approved" required>
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <span class="input-group-addon">
            <i class="fa" :class="{'fa-check': approved != '', 'fa-exclamation-triangle': approved == ''}"></i>
          </span>
        </div>
      </div>
      <div class="alert alert-success alert-dismissable" v-show="showAlert">
          <a href="#" class="close" @click.prevent="hideAlert">&times;</a>
          The new student has been registered.
          <router-link class="alert-link" to="/">View the full list</router-link>.
      </div>
      <div class="text-right">
        <button class="btn btn-default pull-left btn-md" type="reset">Reset</button>
        <button class="btn btn-primary btn-md" type="submit"
        :disabled="firstName == '' || lastName == '' || approved == ''">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    data () {
      return {
        approved: '',
        firstName: '',
        lastName: '',
        showAlert: false
      }
    },
    methods: {
      ...mapActions(['addStudent']),
      saveStudent () {
        this.$store.dispatch('addStudent', {
          firstName: this.firstName,
          lastName: this.lastName,
          approved: this.approved === 'yes'
        })

        this.resetForm()
        this.displayAlert()
      },
      resetForm () {
        this.lastName = ''
        this.firstName = ''
        this.approved = ''
      },
      hideAlert () {
        this.showAlert = false
      },
      displayAlert () {
        this.showAlert = true
      }
    }
  }
</script>
