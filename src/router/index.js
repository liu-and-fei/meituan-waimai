import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from '../views/shouye/index.vue'
import shouye1 from '../views/shouye/shouye.vue'
import dingdan from '../views/dingdan/index.vue'
import myde from '../views/myde/index.vue'
import detail from '../views/detail/index.vue'
import search from '../views/shouye/search.vue'
import site from '../views/shouye/site.vue'
import login from '../views/login/index.vue'
import reg from '../views/reg/index.vue'

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    component: shouye,
    children: [
      {
        path: 'dingdan',
        component: dingdan,
        meta: {
          requireLogin: true
        }
      },
      {
        path: 'myde',
        component: myde,
        meta: {
          requireLogin: true
        }
      },
      {
        path: 'shouye1',
        component: shouye1
      },
      {
        path: '',
        redirect: 'shouye1'
      }
    ]
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/myde',
    component: myde
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: detail
  },
  {
    path: '/site',
    component: site
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/reg',
    component: reg
  }
]

const router = new VueRouter({
  routes
});
//
// 全局前置守卫
// router.beforeEach((to, from, next) => {
// // 路由拦截
//   if (to.meta.requireLogin) {
//     if (window.localStorage.getItem('ifLogin')) {
//       next()
//     } else {
//       // console.log(to)
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//   } else {
//     next()
//   }
// })

// 全局后置守卫
// router.afterEach((to, from) => {
//   // console.log('后置')
// })

export default router;
