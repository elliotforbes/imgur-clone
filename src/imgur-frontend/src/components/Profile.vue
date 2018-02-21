<template>
<div class="container">
  <div class="profile-container">
      <h4>My Profile: {{ user.username }}</h4>
  </div>
</div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      msg: 'My Profile Component',
      user: {},
      accessToken: null
    }
  },
  created: function() {
    this.user = this.$cognitoAuth.getCurrentUser();
    this.accessToken = this.$cognitoAuth.getIdToken((err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log(result)
      }
    })
    
  }
}
</script>

<style scoped>
.profile-container{
  width: 100%;
  height: auto;
  background-color: white;
  margin-top: 60px;
  border-radius: 5px;
  padding: 20px;
  margin: auto;
  border: 1px solid #E4E6E7;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.4);
}
.profile-container h4 {
  font-size: 22px;
  margin: 0;
  padding: 0;
}
</style>
