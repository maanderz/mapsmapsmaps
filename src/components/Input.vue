<template>
  <form class="search-form">
    <input class="address-input" placeholder="Address...">
    <button class="search-btn" type="submit" > 
      <img class="button-size" src="../assets/search.png" />
    </button>
  </form>
</template>

<script>  

  export default {
    
  }
</script>

<style>
.search-form {
  display: flex; 
  margin: 2rem auto;
  border: 1px solid black;
  width: 75%;
}

.address-input {
    display: block;
    padding: 1rem 0 1rem 1rem;
    border-radius: 0;
    border: none;
    width: 90%;
}

.search-btn {
  background: transparent;
  border: none;
}

.button-size {
  height: 20px;
  width: 20px;
}
</style>
