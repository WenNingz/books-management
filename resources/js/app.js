import Vue from 'vue';
import Vuetify from 'vuetify'
import { router } from './router';
import Main from './Main.vue';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: '#00BCD4',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
});

new Vue({
    el: '#app',
    router,
    render: h => h(Main)
});
