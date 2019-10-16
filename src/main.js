import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/scss/reset.scss"
import './assets/js/rem'

Vue.config.productionTip = false

import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

import { Circle } from 'vant';
Vue.use(Circle);

import { Collapse, CollapseItem } from 'vant';
Vue.use(Collapse).use(CollapseItem);

import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);

import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);

import { Popup } from 'vant';
Vue.use(Popup);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
