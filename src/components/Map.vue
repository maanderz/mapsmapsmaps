<template>
  <div class="main-map">
    {{ info }}
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data () {
      return {
        info: null
      }
    },
    created() {
      console.log('Component has been created!');
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
    }
  }
</script>