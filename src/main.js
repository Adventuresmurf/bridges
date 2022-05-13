import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCRLit0kzLyoOXtSuPN_HT_lNkZpzv-I08',
    libraries: 'places',
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
