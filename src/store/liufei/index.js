import http from '@/utils/http';
export default {
  namespaced: true,

  state: {
    iserror: false,
    sortVOList: [],
    shopList: []
  },

  getters: {

  },

  mutations: {
    SETDATALIST (state, list) {
      state.sortList = list.sortVOList;
    },
    SETGOODSLIST (state, list) {
      state.shopList.push(...list.shopList);
    }
  },

  actions: {
    getDataList ({ commit }) {
      http.post('http://localhost:8080/meituan/openh5/poi/filterconditions?_=1560255541980&X-FOR-WITH=v6Rnitzgi%2BmQGvCWmTA53jOcHfZmKLK3IIECh%2FxjGpA8QsA1fyYqnd4dp%2BLVs5FJk%2B4DxuYsN02ZAYZXEqXDjPM1VeoPqSE7BBfTLcZAQIG9oQm9SaYypOqKDj3y%2BGFBtSDKvn%2F1QVOrKnAYyXKs9Q%3D%3D')
        .then(res => {
          commit('SETDATALIST', res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getGoodsList ({ commit, state }) {
      http.post('http://localhost:8080/meituan/openh5/homepage/poilist?startIndex=0&sortId=0&multiFilterIds=&sliderSelectCode=&sliderSelectMin=&sliderSelectMax=&geoType=2&rankTraceId=&uuid=16b4fc580b2c8-064dfcd01291df-2d604637-3d10d-16b4fc580b3c8&platform=3&partner=4&originUrl=http%3A%2F%2Fh5.waimai.meituan.com%2Fwaimai%2Fmindex%2Fhome&riskLevel=71&optimusCode=10&wm_latitude=22626049&wm_longitude=113837908&wm_actual_latitude=&wm_actual_longitude=&_token=')
        .then(res => {
          state.iserror = false;
          commit('SETGOODSLIST', res.data.data);
          // console.log(res.data.data.shopList);
        })
        .catch(err => {
          console.log(err);
          state.iserror = true;
        })
    }
  }

}
