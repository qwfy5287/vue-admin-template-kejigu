'use strict'

import Vue from 'vue'
import lodash from 'lodash'

Plugin.install = function(Vue, options) {
  Vue.axios = lodash
  window.axios = lodash
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return lodash
      }
    },
    $axios: {
      get() {
        return lodash
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
