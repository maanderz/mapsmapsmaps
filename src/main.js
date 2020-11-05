import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import 'normalize.css';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_KEY
  }
})

new Vue({
  store,
  beforeCreate() { this.$store.commit('initialiseStore')},
  render: h => h(App),
}).$mount('#app')

