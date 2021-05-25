import Vue from 'vue'
import Router from 'vue-router'
// Jeff: 02. import the component.
import UserLocation from '@/pages/UserLocation'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: UserLocation   // Jeff: 01. find this component by this path.
  }]
})
