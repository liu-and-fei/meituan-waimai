import axios from 'axios'
export default {
  namespaced: true,

  state: {
    classList: []
  },

  getters: {

  },

  mutations: {
    SETCLASSLIST (state, list) {
      state.classList = list.reverse().splice(10).reverse();
    }

  },

  actions: {
    getClassList ({ commit }) {
      axios.post('http://localhost:8080/meituan/openh5/homepage/kingkong?initialLat=0&initialLng=0&actualLat=22.674185&actualLng=113.812655&geoType=2&wm_latitude=&wm_longitude=&wm_actual_latitude=22674185&wm_actual_longitude=113812655').then(response => {
        let res = response.data
        // console.log(res)
        let arr = res.data.kingkongList;
        // console.log(arr);
        commit('SETCLASSLIST', arr);
      })
    }

  }

}
