import Vue from 'vue'
import App from './App'
import offlineRuntine from 'offline-plugin/runtime'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

offlineRuntine.install()
