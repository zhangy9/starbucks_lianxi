// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import {
  TimePicker,
  DatePicker,
  Input,
  Upload
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false

Vue.use(TimePicker);
Vue.use(DatePicker);
Vue.use(Input);
Vue.use(Upload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
