import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from '../views/shouye/index.vue'
import shouye1 from '../views/shouye/shouye.vue'
import dingdan from '../views/dingdan/index.vue'
import myde from '../views/myde/index.vue'
import detail from '../views/detail/index.vue'
import search from '../views/shouye/search.vue'
import site from '../views/shouye/site.vue'

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    component: shouye,
    children: [
      {
        path: 'dingdan',
        component: dingdan
      },
      {
        path: 'myde',
        component: myde
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
    path: '/detail',
    component: detail
  },
  {
    path: '/site',
    component: site
  }
]

const router = new VueRouter({
  routes
});

export default router;
