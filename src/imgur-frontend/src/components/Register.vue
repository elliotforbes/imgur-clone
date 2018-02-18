<template>
    <div class="login-box">
        <h4>Register</h4>
        <p>Don't have an account? Register for one using your Google account</p>
        <div class="center-align">
            <button @click="authenticate('Google')" class="btn btn-large"><i class="ion ion-social-google-outline"></i> Google</button>
        </div>
    </div>
</template>

<script>
import auth from '../services/auth'

export default {
  name: 'Login',
  methods: {
    authenticate (provider) {
      return auth.authenticate(provider)
    }
  }
}
</script>

<style scoped>
h4 {
    text-align: center;
    margin: 0;
    padding: 0;
    font-weight: 800;
    font-size: 18px;
}
p {
    text-align: center;
    font-size: 14px;
    padding-bottom: 10px;
}
.login-box {
    width: 400px;
    height: auto;
    background-color: white;
    margin-top: 60px;
    border-radius: 5px;
    padding: 40px;
    margin: auto;
    border: 1px solid #E4E6E7;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.4);
}
button {
    margin: auto;
    background-color: #FA3254;
    margin: 0;
    padding: 0px 40px;
}

button i {
    font-size: 18px;
}
</style>
