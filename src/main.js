import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import SemanticCss from 'semantic-ui-css/semantic.min.css'
import SemanticJS from 'semantic-ui-css/semantic.min.js'
import FontAwesome from 'font-awesome/css/font-awesome.min.css'

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
