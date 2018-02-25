<template>
  <div>
    <nav>
      <div class="nav-wrapper">
          <router-link to="/Home" class="brand-logo">Imgur-Clone</router-link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="https://github.com/elliotforbes/imgur-clone"> View On Github</a></li>
            <li v-if="!loggedIn"><router-link to="Login">Login</router-link></li>
            <li v-if="!loggedIn"><router-link to="register">Register</router-link></li>
            <li v-if="loggedIn"><router-link to="Logout">Logout</router-link></li>
          <li v-if="loggedIn" class="tab"><router-link :to="{ name: 'Profile'}"><i class="ion ion-android-person"></i> My Profile</router-link></li>
          <li v-if="loggedIn" class="tab"><router-link :to="{ name: 'Upload'}"><i class="ion ion-android-person"></i> Upload</router-link></li>
          </ul>
      </div>
    </nav>

    <div class="clear"></div>

    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Cognito from '@/cognito'

export default {
  name: 'App',
  data: function() {
    return {
      loggedIn: false
    }
  },
  created: function() {
    this.$cognitoAuth.isAuthenticated((err, loggedIn) => {
      this.loggedIn = loggedIn
    })
  }
}
</script>

<style>
</style>
