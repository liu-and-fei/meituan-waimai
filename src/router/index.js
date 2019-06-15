import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from '../views/shouye/index.vue'
import dingdan from '../views/dingdan/index.vue'
import myde from '../views/myde/index.vue'
import detail from '../views/detail/index.vue'

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    component: shouye
  },
  {
    path: '/dingdan',
    component: dingdan
  },
  {
    path: '/myde',
    component: myde
  },
  {
    path: '/detail/:id',
    component: detail
  }
]

const router = new VueRouter({
  routes
});

export default router;
