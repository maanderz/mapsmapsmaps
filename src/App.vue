<template>
  <div id="app">
	<GoogleMap />
	<div class="input-section">
		<Input />
		<Save v-if="openSave"/>
		<ShowSaved v-if="showSaved"/>
		<Recent v-if="openRecent" />
	</div>
	<Nav />
  </div>


</template>

<script>
import GoogleMap from "./components/GoogleMap"
import Input from "./components/Input"
import Nav from "./components/Nav"
import Save from "./components/Save"
import ShowSaved from "./components/ShowSaved"
import Recent from "./components/RecentSearches"

export default {
  name: 'App',
  components: {
	Input,
	Nav,
	Save,
	ShowSaved,
	Recent,
	GoogleMap
  },
  computed: {
	openSave(){
		return this.$store.state.openSave;
	},
	showSaved(){
		return this.$store.state.showSaved;
	},
	openRecent(){
		return this.$store.state.openRecent;
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

