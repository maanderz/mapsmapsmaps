<template>
  <div id="app">
	<Map />
	<!-- <GoogleMap /> -->
	<div class="input-section">
		<Input />
		<Save />
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
// import { mapState } from "vuex";

export default {
  name: 'App',
  components: {
	Map,
	Input,
	Nav,
	Save
	// GoogleMap
  },
  
}
</script>

<style>
	html, body {
		overflow: hidden;
	}

	.input-section{
		display: flex;
		flex-direction: column;
	}
</style>

