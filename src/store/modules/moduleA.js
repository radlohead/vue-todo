const moduleA = {
  namespaced: true,
  state: {
    test: 'A test',
    moa: 'moa!!!',
    count: 1,
    title: 'title init'
  },
  getters: {
    getCount: () => 2
  },
  mutations: {
    muCount: (state, arg) => {
      return arg ? (state.count += arg) : (state.count += 2)
    },
    muTitle: (state, title) => {
      state.title = title
    }
  },
  actions: {
    countAsync: ({ commit }) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('muCount')
          resolve('promise test')
        }, 1000)
      })
    },
    count2Async: ({ commit }, arg) => {
      setTimeout(() => {
        commit('muCount', arg)
      }, 1000)
    },
    count3Async: async ({ commit }) => {
      const responseData = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      )
      const response = await responseData.json()
      commit('muTitle', response.title)
    }
  }
}

export default moduleA
