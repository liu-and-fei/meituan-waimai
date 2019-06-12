import axios from 'axios'
export default {
  namespaced: true,

  state: {
    foodList: []
  },

  getters: {

  },

  mutations: {
    SETFOODLIST (state, list) {
      state.foodList = list
    }
  },

  actions: {
    getFoodList ({ commit }) {
      axios.post('http://localhost:8080/openh5/poi/food?geoType=2&mtWmPoiId=946654925215801&dpShopId=-1&source=shoplist&skuId=&uuid=12F7D15509BD0981088355617DDCF881EB804B9484841A50F113C184FCB16396&platform=3&partner=4&originUrl=http%3A%2F%2Fh5.waimai.meituan.com%2Fwaimai%2Fmindex%2Fmenu%3FdpShopId%3D%26mtShopId%3D946654925215801%26source%3Dshoplist%26initialLat%3D%26initialLng%3D%26actualLat%3D22.674185%26actualLng%3D113.812655&riskLevel=71&optimusCode=10&wm_latitude=0&wm_longitude=0&wm_actual_latitude=22674185&wm_actual_longitude=113812655&_token=')
        .then(response => {
          let res = response.data
          console.log(res)
          commit('SETFOODLIST', res)
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  }

}
