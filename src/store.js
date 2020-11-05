import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VuexPersist from 'vuex-persist';

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
  recentList: ['stuff'],

  agreedToPrivacy: false
}

const mutations = {
  agreePrivacyPolicy(state) {
    localStorage.setItem('agreedToPrivacy', JSON.stringify(state));
    state.agreedToPrivacy = true;
  },
  initialiseStore(state) {
    if (localStorage.getItem('agreedToPrivacy')) {
      let obj = JSON.parse(localStorage.getItem('agreedToPrivacy'));
      console.log('123',obj)
      state.agreedToPrivacy = true;
    }
  },


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
    axios.post(`${baseURL}/address`, {
      address: state.address,
    })
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
  },

  abc: (state) => {
    return state.agreedToPrivacy;
  }
}

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
})

export default new Vuex.Store({
  state,
  getters,
  actions, 
  mutations,
  plugins: [vuexLocalStorage.plugin]
})