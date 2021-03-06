import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/users.js";
import starter from "./modules/starter.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    users,
    starter
  }
});
