<template>
  <div id="app">
	<Map />
	<!-- <GoogleMap /> -->
	<div class="input-section">
		<Input />
		<Save v-if="openSave"/>
	</div>
	<Nav />
  </div>


</template>

<script>
// import GoogleMap from "./components/GoogleMap"
import Map from "./components/Map"
import Input from "./components/Input"
import Nav from "./components/Nav"
import Save from "./components/Save"

export default {
  name: 'App',
  components: {
	Map,
	Input,
	Nav,
	Save
	// GoogleMap
  },
  computed: {
	openSave(){
		return this.$store.state.openSave;
	}
  }
  
}
</script>

<style>
	html, body {
		overflow: hidden;
	}

	#app {
		font-family: 'Source Sans Pro', sans-serif;
	}

	.input-section{
		display: flex;
		flex-direction: column;
	}
</style>

