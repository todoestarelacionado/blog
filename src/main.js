import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import titleMixin from '@/lib/titleMixin';

Vue.config.productionTip = false;
Vue.mixin(titleMixin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');