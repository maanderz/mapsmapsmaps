<template>
  <form class="search-form" @submit.prevent="handleSubmit">
    <div class="display"> {{ this.$store.getters.displayAddress }} </div>
    <input class="address-input" 
      value="userAddress"
      placeholder="Enter an address..." 
      v-model="address">
    <button class="search-btn" type="submit"> 
      <img class="button-size" src="../assets/search.png" />
    </button>
  </form>
</template>

<script>
  export default {
    data(){
      return {
        address: '',
      }
    },
    methods: {
      handleSubmit(){
        this.$store.commit('updateAddress', this.address);
        this.$store.commit('updateRecent', this.address);
        this.$store.dispatch('fetchAddress');

        let show = this.$store.state.openRecent;
        let saved = this.$store.state.openSave;
        let showSaved = this.$store.state.showSaved;

        if (saved) {
            this.$store.commit('changeOpenSave', false)
        } 
        if (showSaved) {
            this.$store.commit('changeShowSaved', false)
        }
        if (show){
            this.$store.commit('changeRecent', false)
        } 

        return this.address = '';
      }
    },
    watch: {
      userAddress: function() {
        console.log(this.$store.getters.displayAddress)
        return this.$store.getters.displayAddress;
      }
    }
 
  }
</script>

<style lang="scss">
  .search-form {
    display: flex; 
    flex-wrap: wrap;
    margin: 2rem auto;
    width: 75%;
    z-index: 2;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .address-input {
      display: block;
      font-size: 18px;
      font-style: italic;
      padding: 1rem 0 1rem 1rem;
      border-radius: 0;
      border: none;
      width: 90%;
  }

  .search-btn {
    background: white;
    border: none;
    padding: 1rem;
  }

  .button-size {
    height: 20px;
    width: 20px;
  }

  .display {
    width: 100%;
    padding: 1rem;
    font-weight: 600;
    font-size: 24px;
    font-style: italic;
    text-transform: capitalize;
  }

  @media (max-width: 767.98px){
    .address-input {
        width: 80%;
    }    
  }
</style>
