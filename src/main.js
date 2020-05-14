import Vue from 'vue';
import App from './App';

new Vue({
  // render: function(h) {
  //   return h(App);
  // }
  // el: '#app', similar to .$mount('#app');
  render: h => h(App)
}).$mount('#app');

