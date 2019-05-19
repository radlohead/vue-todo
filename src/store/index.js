import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: {
    test: 'A test'
  }
}

const moduleB = {
  state: {
    test: 'A test'
  }
}

const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  }
})

export default store
