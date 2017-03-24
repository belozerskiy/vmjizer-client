import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import Login from 'components/Login.vue'
import Loader from 'components/Loader.vue'
import Layout from 'components/Layout.vue'
import Dashboard from 'components/pages/Dashboard.vue'
import Settings from 'components/pages/Settings.vue'
import Users from 'components/pages/UserList.vue'
import Test from 'components/pages/Test.vue'
import VMList from 'components/pages/VMList.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      'name': 'Layout',
      'path': '/',
      'component': Layout,
      'children': [
        {
          'name': 'Dashboard',
          'path': 'dashboard',
          'component': Dashboard
        },
        {
          'name': 'Settings',
          'path': 'settings',
          'component': Settings
        },
        {
          'name': 'Users',
          'path': 'users',
          'component': Users
        },
        {
          'name': 'Test',
          'path': 'test',
          'component': Test
        },
        {
          'name': 'Vm',
          'path': 'vm',
          'component': VMList
        },
      ]
    },
    {
      'name': 'Login',
      'path': '/login',
      'component': Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(store.getters.login){
    if(to.path == '/') next('/dashboard');
    next();
  }else{
    to.path != '/login' ? next( { path: '/login' }) : next();
  }
})

export default router;
