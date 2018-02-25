<template>
    <div>
        <div class="row">
            <div v-for="post of latest" class="col l3">
                <div class="img-card">
                    <div class="img">
                        <router-link :to="`/img/${post.key}`">
                        <img v-bind:src="'https://s3-eu-west-1.amazonaws.com/imgur-serverless-v2/' + post.location" alt="">
                        </router-link>
                    </div>
                    <div class="info">
                        <div class="chip" v-for="label of post.labels">{{ label }}</div>
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
