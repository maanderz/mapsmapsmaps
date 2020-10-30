import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mapData: ""
  },

  mutations: {
    change(state, mapData) {
      state.mapData = mapData;
    }
  },

  getters: {
    mapData: (state) => state.mapData
  }
});