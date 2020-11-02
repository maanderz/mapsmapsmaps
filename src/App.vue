<template>
  <div id="app">
	<Map />
	<!-- <GoogleMap /> -->
	<div class="input-section">
		<Input />
		<Save v-if="openSave"/>
		<ShowSaved v-if="showSaved"/>
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
import ShowSaved from "./components/ShowSaved"

export default {
  name: 'App',
  components: {
	Map,
	Input,
	Nav,
	Save,
	ShowSaved
	// GoogleMap
  },
  computed: {
	openSave(){
		return this.$store.state.openSave;
	},
	showSaved(){
		return this.$store.state.showSaved;
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

