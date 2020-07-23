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
    setPosts(state, payload){
      state.post = payload
    },
    setPost(state, payload){
      state.post = payload
    },
      setPost(state, payload){
          state.post = payload
      },
      setEliminarPost(state, payload){
        state.post = state.post.filter(item => item.id !== payload)
    }
  
  },
  actions: {
    getPost({commit, state}, id){
      db.collection(state.usuario.email).doc(id).get()
      .then(doc => {
          res.forEach(doc => {
            let post = doc.data()
              post.id = doc.id
              post.push(post)
              commit('setpost', post)
          })
        .catch(error => console.log(error))
      })
    },
  editarPost({commit, state}, post){
    db.collection(state.usuario.email).doc(post.id).update({
        title: post.title
    })
    .then(() => {
        router.push({name: 'Inicio'})
    })
   .catch(error => console.log(error))

},
agregarPost({commit, state}, titlePost){
  db.collection(state.usuario.email).add({
      title: titlePost
  })
  .then(doc => {
      console.log(doc.id)
      router.push({name: 'Inicio'})
  })
  .catch(error => console.log(error))
    },

    eliminarPost({commit, state}, id){
      db.collection(state.usuario.email).doc(id).delete()
      .then(() => {
          // dispatch('getPost')
          commit('setEliminarPost', id)
      })
      .catch(error => console.log(error))
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
  ingresoUsuario({commit}, usuario){
    auth.signInWithEmailAndPassword(usuario.email, usuario.password)
    .then(res => {
        console.log(res)
        const usuario = {
            email: res.user.email,
            uid: res.user.uid
        }
        commit('setUsuario', usuario)
        router.push('/')
    })
    .catch(error => {
        console.log(error)
        commit('setError', error)
    })
},
  detectarUsuario({commit}, usuario){
    commit('setUsuario', usuario)
},
cerrarSesion({commit}){
  auth.signOut()
  router.push('/login')
},
getters:{
  existeUsuario(state){
      if(state.usuario === null){
          return false
      }else{
          return true
      }
  }
},
  modules: {
  }
})
