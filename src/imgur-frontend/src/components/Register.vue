<template>
    <div class="login-box">
        <h4>Register</h4>
        <div class="card-panel red darken-2" v-if="error != null"><span class="white-text">{{ error.message }}</span></div>
        <p>Don't have an account? Register for one using your Google account</p>
         <form @submit.prevent="authenticate">
            <div class="input-field">
                <input id="username" type="text" class="validate" v-model="username" required>
                <label for="username">Username</label>
            </div>
            <div class="input-field">
                <input id="email" type="text" class="validate" v-model="email" required>
                <label for="email">Email</label>
            </div>
            <div class="input-field">
                <input id="password" type="password" class="validate" v-model="pass" required>
                <label for="password">Password</label>
            </div>
            <div class="center-align">
                <button class="btn btn-default btn-large">Register</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
      return {
          username: '',
          pass: '',
          email: '',
          error: null
      }
  },
  methods: {
    authenticate () {
        this.$cognitoAuth.signup(this.username, this.email, this.pass, (err, result) => {
            if (err) {
                this.error = err
            } else {
                this.$router.replace({path: '/confirm'})
            }
        })
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
