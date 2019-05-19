const moduleA = {
  namespaced: true,
  state: {
    test: 'A test',
    moa: 'moa!!!',
    count: 1
  },
  getters: {
    getCount: () => 2
  }
}

export default moduleA
