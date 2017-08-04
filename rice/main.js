// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app.vue'

import '../../../../../util/reset.css'
import '../../../../../util/hotcss/hotcss.js'

import request from './request'
Vue.use(request)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})
