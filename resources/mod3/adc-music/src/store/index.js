import Vue from 'vue'
import Vuex from 'vuex'

import { track } from './modules/track'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    track
  }
})

export default store
