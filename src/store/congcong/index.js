import axios from 'axios'
export default {
  namespaced: true,

  state: {
    foodList: {},
    shopinfor: {},
    total: 0,
    id: ''
  },

  getters: {

  },

  mutations: {
    SETFOODLIST (state, list) {
      state.foodList = list
    },
    SETSHOPINFOR (state, list) {
      state.shopinfor = list
    },
    SETTOTAL (state, count) {
      state.total = count
    },
    SETID (state, id) {
      state.id = id
    }
  },

  actions: {
    getFoodList (context) {
      var shopId = context.state.id
      console.log(shopId)
      axios.post(`http://localhost:8080/openh5/poi/food?geoType=2&mtWmPoiId=${shopId}&dpShopId=-1&source=shoplist&skuId=&uuid=12F7D15509BD0981088355617DDCF881EB804B9484841A50F113C184FCB16396&platform=3&partner=4&originUrl=http%3A%2F%2Fh5.waimai.meituan.com%2Fwaimai%2Fmindex%2Fmenu%3FdpShopId%3D%26mtShopId%3D1108931674616393%26source%3Dshoplist%26initialLat%3D%26initialLng%3D%26actualLat%3D22.697527%26actualLng%3D113.809971&riskLevel=71&optimusCode=10&wm_latitude=0&wm_longitude=0&wm_actual_latitude=22697527&wm_actual_longitude=113809971&_token=`)
        .then(response => {
          let res = response.data
          context.commit('SETFOODLIST', res)
        })
        .catch(error => {
          console.log(error.message)
        })
    },
    getShopInfor (context) {
      var shopId = context.state.id
      axios.post(`http://localhost:8080/openh5/poi/info?shopId=0&orderPlatform=&mtWmPoiId=${shopId}&source=shoplist&address=&cityId=&channel=6&gpsLng=113.809971&gpsLat=22.697527&uuid=12F7D15509BD0981088355617DDCF881EB804B9484841A50F113C184FCB16396&platform=3&partner=4&originUrl=http%3A%2F%2Fh5.waimai.meituan.com%2Fwaimai%2Fmindex%2Fmenu%3FdpShopId%3D%26mtShopId%3D857336785451413%26source%3Dshoplist%26initialLat%3D%26initialLng%3D%26actualLat%3D22.697527%26actualLng%3D113.809971&riskLevel=71&optimusCode=10&wm_latitude=0&wm_longitude=0&wm_actual_latitude=22697527&wm_actual_longitude=113809971&_token=`)
        .then(response => {
          let res = response.data
          context.commit('SETSHOPINFOR', res)
        }).catch(error => {
          console.log(error.message)
        })
    }
  }

}
