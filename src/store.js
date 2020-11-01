import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const baseURL = 'http://localhost:3000/';

const state = {
  map: '',
  currentLocation: {  
    center: { lat: 45.508, lng: -73.587 },
    markers: [],
    places: [],
    currentPlace: null
  },
  address: 'Address...'
}

const mutations = {
  updateMapImage (state, image){
    state.map = image; 
  },

  updateAddress (state, address) {
    state.address = address; 
  },

  updateGeoPoints (state, points){
    console.log(state.currentLocation, points)
    state.currentLocation.center.lat = points.lat; 
    state.currentLocation.center.lng = points.lng;     
  }

}

const actions = {
  fetchImage ({ commit }) {
    axios
    // .get(`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=${process.env.VUE_APP_KEY}`)
    // .then(res => commit('updateMapImage', res.config.url))        
    
    .get(`https://api.hatchways.io/assessment/students`)
    .then(res => (commit('updateMapImage', res.data.students[0].pic)) )
    .catch(err => console.log(err))  
  },

  fetchAddress({ commit }){
    console.log('123',state.address)
    axios
    .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${state.address}&key=${process.env.VUE_APP_KEY}`)
    .then(res => (commit('updateGeoPoints', res.data.results[0].geometry.location)))
    .catch(err => console.log(err))
  },

  addToRecent(){
    // axios.get(baseURL).then(res => console.log(res))
    const article = { address: state.address };
    const headers = {"Access-Control-Allow-Origin": "*"}
    axios.post(baseURL, article, { headers })
  }

}

const getters = {
  displayMap: (state) => {
    return state.map
  },

  displayJSMap: (state) => {
    return state.currentLocation;
  },

  displayAddress: (state) => {
    return state.address;
  }

}

export default new Vuex.Store({
  state,
  getters,
  actions, mutations
})