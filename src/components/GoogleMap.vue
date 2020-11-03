<template>
  <div>
    <gmap-map
      :center="$store.getters.displayJSMap.center"
      :zoom="15"
      style="width:100vw;  height: 100vh;"
    >
    </gmap-map> 
  </div> 
</template>