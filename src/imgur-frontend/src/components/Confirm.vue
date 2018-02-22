<template>
    <div class="login-box center-align">
        <h4>Confirm Signup</h4>
        <div class="card-panel red darken-2" v-if="error != null"><span class="white-text">{{ error.message }}</span></div>
        <p>Enter the verification code you should have recieved via email</p>
        <form @submit.prevent="login">
            <div class="input-field">
                <input id="username" type="text" class="validate" v-model="username" required>
                <label for="username">Username</label>
            </div>
            <div class="input-field">
                <input id="confirmcode" type="text" class="validate" v-model="confirmcode" required>
                <label for="confirmcode">Confirmation Code</label>
            </div>
            <div class="center-align">
                <button class="btn btn-default btn-large">Verify Now</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Confirm',
    data () {
        return {
            username: '',
            confirmcode: '',
            error: null,
            loading: false
        }
    },
    methods: {
        login () {
            this.loading = true
            this.$cognitoAuth.confirmRegistration(this.username, this.confirmcode, (err, result) => {
                if (err.statusCode !== 200) {
                    this.error = err
                } else {
                    console.log("Successfully Verified")
                    this.$router.replace('/profile')
                }
            });
        }
    }
}
//confirmcode
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
