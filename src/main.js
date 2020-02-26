import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import i18n from './i18n'

Vue.config.productionTip = false

//configuracion del route guard to set the language
router.beforeEach((to,from,next)=>{
  let language=to.params.lang;
  if(!language){
    language="en"
  }
  i18n.locale=language
  next()
})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
