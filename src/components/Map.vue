<template>
  <div class="main-map">
    <img class="map-size" :src="$store.getters.displayMap" />
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
      return this.$store.dispatch('fetchImage');
    }
  }
</script>

<style>
  .map-size {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0; 
    left: 0;
  }
</style>