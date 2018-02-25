<template>
<div class="container">
    <div class="image-container center">
        <img v-bind:src="'https://s3-eu-west-1.amazonaws.com/imgur-serverless-v2/' + image.location" alt="">  
        <div class="info">
            <div class="chip" v-for="label of image.labels">{{ label }}</div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  created() {
    this.key = this.$route.params.key;
    axios.get('https://rvv1a9to8j.execute-api.eu-west-1.amazonaws.com/dev/single?key=' + this.key)
        .then((response) => {
            this.image = response.data;
            console.log(this.image)
        })
        .catch((err) => {
            console.log(err)
        })
  },
  data: () => {
      return {
          key: '',
          image: {}
      }
  }
}
</script>

<style scoped>
.image-container{
    background-color: white;
    padding: 20px;
    border-radius: 3px;
}

.image-container img {
    width: 100%;
}
</style>
