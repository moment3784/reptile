const mutations = {
  increment (state) {
    state.counter++
  },
  tabView (state, id) {
    console.log(id)
    state.viewId = id
  }
}

export default mutations
