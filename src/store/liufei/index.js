import http from '@/utils/http';
export default {
  namespaced: true,

  state: {
    iserror: false,
    loading: false,
    finished: false,
    hasNextPage: true,
    sortVOList: [],
    shopList: []
  },

  getters: {

  },

  mutations: {
    CHGLOADING (state, bol) {
      state.loading = bol;
    },
    SETDATALIST (state, list) {
      state.sortList = list.sortVOList;
    },
    SETGOODSLIST (state, list) {
      state.shopList.push(...list.shopList);
    }
  },

  actions: {
    getDataList ({ commit, state }) {
      http.post('http://localhost:8080/meituan/openh5/poi/filterconditions?_=1560255541980&X-FOR-WITH=v6Rnitzgi%2BmQGvCWmTA53jOcHfZmKLK3IIECh%2FxjGpA8QsA1fyYqnd4dp%2BLVs5FJk%2B4DxuYsN02ZAYZXEqXDjPM1VeoPqSE7BBfTLcZAQIG9oQm9SaYypOqKDj3y%2BGFBtSDKvn%2F1QVOrKnAYyXKs9Q%3D%3D')
        .then(res => {
          commit('SETDATALIST', res.data.data);
        })
        .catch(err => {
          console.log(err);
          state.iserror = true;
        });
    },
    getGoodsList ({ commit, state }, pageNum) {
      http.post(`http://localhost:8080/meituan/openh5/homepage/poilist?startIndex=${pageNum}&sortId=0&multiFilterIds=&sliderSelectCode=&sliderSelectMin=&sliderSelectMax=&geoType=2&rankTraceId=&uuid=374D82ED2F0C8BFA14C8738B726CFE546EB152BF50936AA21B8F3213C83AC5D6&platform=3&partner=4&originUrl=http%3A%2F%2Fh5.waimai.meituan.com%2Fwaimai%2Fmindex%2Fhome&riskLevel=71&optimusCode=10&wm_latitude=0&wm_longitude=0&wm_actual_latitude=22694137&wm_actual_longitude=113793439&_token=`)
        .then(res => {
          commit('SETGOODSLIST', res.data.data);
          state.iserror = false;
          commit('CHGLOADING', false); // 请求完成
          if (!res.data.data.poiHasNextPage) {
            state.finished = true;
          }
        })
        .catch(err => {
          console.log(err);
          state.iserror = true;
          commit('CHGLOADING', false); // 请求完成
        })
    }
  }

}
