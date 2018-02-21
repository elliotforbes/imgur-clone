<template>
    <div class="login-box">
        <div class="center-align">
            <div v-if="loading" class="loader loader--style1" title="0">
                <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
                <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
                <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                    C22.32,8.481,24.301,9.057,26.013,10.047z">
                    <animateTransform attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 20 20"
                    to="360 20 20"
                    dur="0.5s"
                    repeatCount="indefinite"/>
                    </path>
                </svg>
            </div>
        </div>
        <h4>LOGIN</h4>
        <div class="card-panel red darken-2" v-if="error != null"><span class="white-text">{{ error.message }}</span></div>
        <p>Login to upload your own images to the site!</p>
        <form @submit.prevent="login">
            <div class="input-field">
                <input id="username" type="text" class="validate" v-model="username" required>
                <label for="username">Username</label>
            </div>
            <div class="input-field">
                <input id="password" type="password" class="validate" v-model="pass" required>
                <label for="password">Password</label>
            </div>
            <div class="center-align">
                <button class="btn btn-default btn-large">login</button>
                <br/>
                <p>Don't have an account? - <router-link to="Register">Register Now</router-link></p> 
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      pass: '',
      error: null,
      loading: false
    }
  },
  methods: {
    login () {
        this.loading = true
        this.$cognitoAuth.authenticate(this.username, this.pass, (err, result) => {
            if (err.statusCode !== 200) {
                console.log(err)
                this.error = err
            } else {
                this.$router.replace('/profile')
            }
        });
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
