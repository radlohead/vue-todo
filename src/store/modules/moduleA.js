const moduleA = {
  namespaced: true,
  state: {
    test: 'A test',
    moa: 'moa!!!',
    count: 1
  },
  getters: {
    getCount: () => 2
  },
  mutations: {
    muCount: state => {
      return (state.count += 2)
    }
  }
}

export default moduleA
