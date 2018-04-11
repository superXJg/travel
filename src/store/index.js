import Vue from 'vue'
import vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(vuex)

export default new vuex.Store({
  state,
  mutations,
  actions: {
    changeCity (ctx, val) {
      ctx.commit('handleCity', val)
    }
  }
})
