<template>
  <div class="main-map">
    <img src="../assets/logo.png"/>
    <img :src="$store.getters.displayMap" />
  </div>
</template>

<script>  
  export default {
    data () {
      return {
        info: null
      }
    },
    created() {
      this.$store.dispatch('fetchImage');


        // .get(`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=${process.env.VUE_APP_KEY}`)
        // .then(res => console.log(res.config.url))
    },
  }
</script>