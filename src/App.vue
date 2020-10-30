<template>
  <div id="app">
	<!-- <Map /> -->
	<GoogleMap />
	<Input />
  </div>


</template>

<script>
import GoogleMap from "./components/GoogleMap"
// import Map from "./components/Map"
import Input from "./components/Input"

export default {
  name: 'App',
  components: {
	// Map,
	Input,
	GoogleMap
  }

}
</script>

