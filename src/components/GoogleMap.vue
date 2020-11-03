<template>
  <div>
    <gmap-map
      :center="$store.getters.displayJSMap.center"
      :zoom="15"
      style="width:100vw;  height: 100vh;"
    >
    <gmap-marker
      :key="index"
      :position="$store.getters.displayJSMap.center"
      >
    </gmap-marker>
    </gmap-map> 
  </div> 
</template>