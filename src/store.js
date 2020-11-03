import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const baseURL = process.env.VUE_APP_BASEURL

const state = {
  map: '',
  currentLocation: {  
    center: { lat: 45.508, lng: -73.587 },
    markers: [],
    places: [],
    currentPlace: null
  },
  address: '',
  openSave: false,
  showSaved: false,
  savedAddresses: [],
  openRecent: false,
  recentList: [],
}

const mutations = {
  updateMapImage (state, image){
    state.map = image; 
  },

  updateAddress (state, address) {
    state.address = address; 
  },

  updateGeoPoints (state, points){
    state.currentLocation.center.lat = points.lat; 
    state.currentLocation.center.lng = points.lng;     
  },

  changeOpenSave (state, val){
    state.openSave = val;
  },

  changeShowSaved (state, val){
    state.showSaved = val;
  },

  updateSavedList (state, data){
    console.log(data)
    data.forEach(datum => state.savedAddresses.unshift(datum))
  },

  changeRecent(state, val){
    state.openRecent = val
  },

  updateRecent(state, address){
    if (address === '') {
      alert('Please enter an address')
    } else {  
      
      state.recentList.unshift(address);
    }
  }
}

const actions = {
  fetchAddress({ commit }){
    axios
    .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${state.address}&key=${process.env.VUE_APP_KEY}`)
    .then(res => (commit('updateGeoPoints', res.data.results[0].geometry.location)))
    .catch(err => console.log(err))
  },

  sendAddress(){
    const headers = {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json;charset=UTF-8' 
    };

    axios.post(`${baseURL}/address`, {
      address: state.address,
    }, { headers })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  },

  fetchAddresses({ commit }){
    axios.get(`${baseURL}/addresses`).then(res => commit('updateSavedList', res.data));
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
  },

  openSave: (state) => {
    return state.openSave
  },

  showSavedList: (state) => {
    return state.savedAddresses
  },

  showRecentList: (state) => {
    return state.recentList
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions, mutations
})