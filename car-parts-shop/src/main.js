import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from '../node_modules/bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import './assets/app.css'
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
