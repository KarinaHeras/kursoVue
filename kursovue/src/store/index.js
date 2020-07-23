import Vue from 'vue'
import Vuex from 'vuex'
import { auth, db } from '../firebase'
import router from '../router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null, 
    post:[]
  },
  mutations: {
    setUsuario(state, payload){
      state.usuario = payload
    },
    setError(state, payload){
      state.error = payload
    },
    setPost(state, payload){
      state.post = payload
    },
    mutations: {
      setPost(state, payload){
          state.post = payload
      }
  },
  },
  actions: {
    getPost({commit, state}){
      const tareas = []
      db.collection(state.usuario.email).get()
      .then(res => {
          res.forEach(doc => {
              console.log(doc.id)
              console.log(doc.data())
              let post = doc.data()
              post.id = doc.id
              post.push(tarea)
          })
          commit('setTareas', tareas)
      })
  },

    crearUsuario({commit}, usuario){
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then(res => {
          console.log(res)
          const usuario = {
            email: res.user.email,
            uid: res.user.uid
          }
          db.collection(res.user.email).add({
            title: 'loren insump'
          }). then(doc => {
            commit('setUsuario', usuario)
          router.push('/')
          }).catch(error => console.log(error))

          
        })
        .catch(error => {
          console.log(error)
          commit('setError', error)
        })
    }
  },
  detectarUsuario({commit}, usuario){
    commit('setUsuario', usuario)
},
cerrarSesion({commit}){
  auth.signOut()
  router.push('/login')
},
  modules: {
  }
})