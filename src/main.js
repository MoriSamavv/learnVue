import Vue from 'vue'
import Element from 'element-ui'
import scroll from 'vue-seamless-scroll'
import Icon from 'vue-svg-icon/Icon.vue'
import '@/theme/element-#41B883/index.css'
import '@/assets/styl/index'
import '@/mock'

import App from '@/App'
import { router } from '@/router'
import '@/router/routerControl'
import store from '@/store'

import i18n from '@/lang'

Vue.component('icon', Icon)

Vue.use(scroll)
Vue.use(Element, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  el: '#app',// 挂载点
  router,
  store,
  i18n,
  components: { App },// 根组件
  template: '<App/>'
})

// https://blog.csdn.net/qq_36145914/article/details/86497123#vue_cli_3_9
// main.js是项目的入口文件，定义了vue实例，并引入根组件app.vue，将其挂载到index.html中id为‘app’的节点上。
// vue实例挂载后，会对节点原内容进行覆盖。所以，即便index.html和app.vue中都定义了<div id="app"></div>, 最终网页也不会出现两个id为app的节点。
