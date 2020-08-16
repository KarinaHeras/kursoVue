import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import { auth } from './firebase'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()
auth.onAuthStateChanged(user => {
  
  if(user){
    // console.log(user)
    const detectoUsuario = {
      email: user.email,
      uid: user.uid
    }
    store.dispatch('detectarUsuario', detectoUsuario)
  }else{
    // console.log(user)
    store.dispatch('detectarUsuario', user)
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

})

