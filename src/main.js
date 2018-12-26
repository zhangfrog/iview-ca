import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
// import router from './router'
import router from './ca_router'

// import devArticle from './components/dev-article.vue';
import ca from './components/ca.vue';
import caRo from './components/ca-ro.vue';

Vue.config.productionTip = false

// Vue.component('dev-article', devArticle);
Vue.component('ca', ca);
Vue.component('ca-ro', caRo);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
