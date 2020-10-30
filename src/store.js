import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  map: ''
}

const mutations = {
  updateMapImage (state, image){
    state.map = image; 
  }
}

const actions = {
  fetchImage ({ commit }) {
    axios
    .get(`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=${process.env.VUE_APP_KEY}`)
    .then(res => commit('updateMapImage', res.config.url))        
    
    
  }
}

const getters = {
  displayMap: (state) => {
    return state.map
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions, mutations
})