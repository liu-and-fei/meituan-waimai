import axios from 'axios'
export default {
  namespaced: true,

  state: {
    foodList: {},
    estimate: {},
    total: 0
  },

  getters: {

  },

  mutations: {
    SETFOODLIST (state, list) {
      state.foodList = list
    },
    SETESTIMATE (state, list) {
      state.estimate = list
    },
    SETTOTAL (state, count) {
      state.total = count
    }
  },

  actions: {
    getFoodList ({ commit }) {
      axios.post('http://localhost:8080/openh5/poi/food?geoType=2&mtWmPoiId=1108931674616393&dpShopId=-1&source=shoplist&skuId=&uuid=12F7D15509BD0981088355617DDCF881EB804B9484841A50F113C184FCB16396&platform=3&partner=4&originUrl=http%3A%2F%2Fh5.waimai.meituan.com%2Fwaimai%2Fmindex%2Fmenu%3FdpShopId%3D%26mtShopId%3D1108931674616393%26source%3Dshoplist%26initialLat%3D%26initialLng%3D%26actualLat%3D22.697527%26actualLng%3D113.809971&riskLevel=71&optimusCode=10&wm_latitude=0&wm_longitude=0&wm_actual_latitude=22697527&wm_actual_longitude=113809971&_token=')
        .then(response => {
          let res = response.data
          commit('SETFOODLIST', res)
        })
        .catch(error => {
          console.log(error.message)
        })
    },
    getEstimate ({ commit }) {
      axios.post('http://localhost:8080/openh5/poi/comments?lng=113.809971&lat=22.697527&gpsLng=113.809971&gpsLat=22.697527&shopId=0&mtWmPoiId=918514299516372&startIndex=0&labelId=0&scoreType=0&uuid=12F7D15509BD0981088355617DDCF881EB804B9484841A50F113C184FCB16396&platform=3&partner=4&originUrl=http%3A%2F%2Fh5.waimai.meituan.com%2Fwaimai%2Fmindex%2Fmenu%3FdpShopId%3D%26mtShopId%3D918514299516372%26source%3Dshoplist%26initialLat%3D%26initialLng%3D%26actualLat%3D22.697527%26actualLng%3D113.809971&riskLevel=71&optimusCode=10&wm_latitude=0&wm_longitude=0&wm_actual_latitude=22697527&wm_actual_longitude=113809971&_token=')
        .then(response => {
          let res = response.data
          console.log(res)
          commit('SETESTIMATE', res)
        }).catch(error => {
          console.log(error.message)
        })
    }
  }

}
