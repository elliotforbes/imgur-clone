<template>
    <div>
        <div class="row">
            <div v-for="post of latest" class="col l3">
                <div class="img-card">
                    <div class="img">
                        <img v-bind:src="post.location" alt="">
                    </div>
                    <div class="info">
                        <h4>{{ post.key }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
        latest: []
    }
  },
  created() {
    var config = {
        headers: {'Content-Type': 'application/json'}
    };
    console.log("Attempting to hit api");
    axios.get("https://rvv1a9to8j.execute-api.eu-west-1.amazonaws.com/dev/list", config)
        .then((response) => {
            console.log(response);
            this.latest = response.data;
        })
        .catch(err => {
            console.log(err);
        });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
