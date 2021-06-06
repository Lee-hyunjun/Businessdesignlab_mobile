import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Main from './main.vue';
import Mobile from './Mobile.vue';

Vue.config.productionTip = false

Vue.use(VueRouter); // router 기능 확장 선언

const routes = [
    // 이곳에 router 를 등록할 것 입니다.
    {
      path: '/',
      component: Main
    },
    {
      path: '/m',
      component: Mobile
    },
];

// router 객체생성
const router = new VueRouter({ 
  routes,
  mode:"history"
});

new Vue({
  render: h => h(App),
  router // router 추가
}).$mount('#app')

