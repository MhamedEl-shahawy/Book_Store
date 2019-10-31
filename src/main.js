import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import StarRating from 'vue-star-rating'


import VueAxios from 'vue-axios'
Vue.component('star-rating', StarRating);


Vue.config.productionTip = false;
Vue.use(VueAxios, axios)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
