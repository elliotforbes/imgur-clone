<template>
    <div>
        <div class="row">
            <div v-for="post of latest" class="col l3">
                <div class="img-card">
                    <div class="img">
                        <img v-bind:src="'https://s3-eu-west-1.amazonaws.com/imgur-serverless/' + post" alt="">
                    </div>
                    <div class="info">
                        <h4>{{ post }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode'

export default {
  name: 'Home',
  data() {
    return {
        latest: []
    }
  },
  created() {
    this.$cognitoAuth.isAuthenticated((err, loggedIn) => {
        if (err) {
            console.err("Home: Couldn't get the session:", err, err.stack)
            return
        } else {
            console.log("Currently Logged In")
            console.log(loggedIn)
        }
        axios.get("https://rvv1a9to8j.execute-api.eu-west-1.amazonaws.com/dev/list")
            .then((response) => {
                console.log(response);
                this.latest = response.data;
            }).catch(err => { console.log(err); })
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
