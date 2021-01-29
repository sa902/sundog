import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import firebase from 'firebase';
// import './components/firebaseInit';

Vue.config.productionTip = false


// '#f2d4ba'


new Vue({
  router,
  store,
  vuetify,

  render: h => h(App)
}).$mount('#app')
