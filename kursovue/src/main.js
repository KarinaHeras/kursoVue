import Vue from 'vue'
import App from './App.vue'
import { auth } from './firebase'
import router from './router'
import store from './store'

Vue.config.productionTip = false


auth.onAuthStateChanged(user => {
  if(user){
    console.log(user)
    store.dispatch('detectarUsuario', {email: user.email, uid: user.uid})
  }else{
    console.log(user)
    store.dispatch('detectarUsuario', user)
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

})