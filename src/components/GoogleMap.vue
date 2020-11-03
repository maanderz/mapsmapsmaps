<template>
  <div>
    <gmap-map
      :center="$store.getters.displayJSMap.center"
      :zoom="15"
      style="width:100vw;  height: 100vh;"
    >
    <gmap-marker
      :key="this.key"
      :position="$store.getters.displayJSMap.center"
      >
    </gmap-marker>
    </gmap-map> 
  </div> 
</template>

<script>
export default {
  data(){
    return {
      key: 1
    }
  },
  methods: {
    newKey(){
      return this.key++
    }
  }
}
</script>