import axios from 'axios'
export default {
  namespaced: true,

  state: {
    classList: [],
    searchList: [],
    zimuList: [],
    hotcity: [],
    allcity: [],
    site: '正在定位...'
  },

  getters: {

  },

  mutations: {
    SETCLASSLIST (state, list) {
      state.classList = list.reverse().splice(10).reverse();
    },
    SEARCHLIST (state, list) {
      state.searchList = list;
    },
    SETZIMULIST (state, list) {
      state.zimuList = list;
    },
    SETHOTCITY (state, list) {
      state.hotcity = list;
    },
    SETALLCITY (state, list) {
      state.allcity = list;
    },
    SETSITE (state, value) {
      state.site = value;
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
    },
    getSearchList ({ commit }) {
      axios.post('http://localhost:8080/meituan/openh5/search/hotlabel?entranceId=&page_index=0&geoType=2&cache=false&wm_poi_id_list=%5B0%2C0%2C0%2C0%2C0%5D&wm_latitude=&wm_longitude=&wm_actual_latitude=22674185&wm_actual_longitude=113812655&_token=').then(respone => {
        let res = respone.data;
        // console.log(res)
        let arr = res.data.hotLabelList;
        // console.log(arr)
        commit('SEARCHLIST', arr);
      })
    },
    getZimuList ({ commit }) {
      axios.post('http://localhost:8080/meituan/openh5/opencity/list?wm_latitude=22697481&wm_longitude=113810128&wm_actual_latitude=22697527&wm_actual_longitude=113809971').then(respone => {
        let res = respone.data.data;
        // console.log(res);
        commit('SETZIMULIST', res.classify_nav);
        commit('SETHOTCITY', res.hot_city);
        commit('SETALLCITY', res.city_nav);
      })
    }

  }

}
