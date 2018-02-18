<template>
    <div class="login-box">
        <h4>LOGIN</h4>
        <p>Login to upload your own images to the site!</p>
        <form action="login">
            <div class="input-field">
                <input id="email" type="text" class="validate">
                <label for="email">Email</label>
            </div>
            <div class="input-field">
                <input id="password" type="password" class="validate">
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
      msg: 'My Login Component'
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
