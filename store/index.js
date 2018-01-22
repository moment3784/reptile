import Vuex from 'vuex'

import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 5,
      viewId: '1'
    },
    mutations
  })
}

export default createStore
