import axios from 'axios'
export default {
  namespaced: true,

  state: {
    mylist: {},
  },
  getters: {

  },

  mutations: {
    SETMYLIST (state, playload) {
      state.mylist = playload;
    }
  },

  actions: {
    getmylist ({ commit }) {
      axios.post('http://localhost:8080/meituan/openh5/account/center?_=1560444071979&X-FOR-WITH=hmCrUk4VJhabc0JsLJseryOVai28EB54frw6qRcIcrckO%2FOH7uWJtJNNVHq5BqTMjaPAys%2FTvZl4Gd7HLFTFglsl4MFzVdIVNQGLZfzAd7mFU9mmgGIOQe09zVGKZh1efyx8LxetnP%2FJW0IhHAV%2FlQ%3D%3D').then(response => {
        console.log(response);
        let res = response.data;
        console.log(res);
        // console.log(res.msg);
        commit('SETMYLIST', res);
      })
    }
  }
}
