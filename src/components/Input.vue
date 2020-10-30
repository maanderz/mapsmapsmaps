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
  width: 75%;
  z-index: 2;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.address-input {
    display: block;
    font-size: 24px;
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
</style>
