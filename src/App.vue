<template>
  <div id="app">
	<Map />
	<!-- <GoogleMap /> -->
	<Input />
	<Nav />
  </div>


</template>

<script>
// import GoogleMap from "./components/GoogleMap"
import Map from "./components/Map"
import Input from "./components/Input"
import Nav from "./components/Nav"

export default {
  name: 'App',
  components: {
	Map,
	Input,
	Nav,
	// GoogleMap
  }

}
</script>

<style>
	html, body {
		overflow: hidden;
	}
</style>

