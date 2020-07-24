import Vue from 'vue'
import Vuex from 'vuex'
import { auth, db } from '../firebase'
import router from '../router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null,
    posts: [],
    post: {
      title: '',
      contenido:'',
      id: ''
    },
    carga: false
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    setPosts(state, payload) {
      state.posts = payload
    },
    setPost(state, payload) {
      state.post = payload
    },
    setEliminarPost(state, payload) {
      state.posts = state.posts.filter(item => item.id !== payload)
    },
    cargarFirebase(state, payload) {
      state.carga = payload
    }
  },
  actions: {
    eliminarPost({
      commit,
      state
    }, id) {
      db.collection(state.usuario.email).doc(id).delete()
        .then(() => {
          commit('setEliminarPost', id)
        })
        .catch(error => console.log(error))
    },
    agregarPost({
      commit,
      state
    }, titlePost) {
      db.collection(state.usuario.email).add({
          title: titlePost,
          contentido: contenidoPost
        })
        .then(doc => {
          router.push({
            name: 'Inicio'
          })
        })
        .catch(error => console.log(error))
    },
    getPost({
      commit,
      state
    }, id) {
      commit('cargarFirebase', true)
      db.collection(state.usuario.email).doc(id).get()
        .then(doc => {
          let post = doc.data()
          post.id = doc.id
          commit('setPost', post)
          commit('cargarFirebase', false)
        })
        .catch(error => console.log(error))
    },
    editarPost({
      commit,
      state
    }, post) {
      db.collection(state.usuario.email).doc(post.id).update({
          title: post.title,
          contenido: post.contenido
        })
        .then(() => {
          router.push({
            name: 'Inicio'
          })
        })
        .catch(error => console.log(error))
    },
    getPosts({
      commit,
      state
    }) {
      commit('cargarFirebase', true)
      const posts = []
      db.collection(state.usuario.email).get()
        .then(res => {
          res.forEach(doc => {
            console.log(doc.id)
            console.log(doc.data())
            let post = doc.data()
            post.id = doc.id
            posts.push(post)
          })
          commit('setPosts', posts)
          setTimeout(() => {
            commit('cargarFirebase', false)
          }, 1500);
        })
    },
    crearUsuario({
      commit
    }, usuario) {
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then(res => {
          console.log(res)
          const usuarioCreado = {
            email: res.user.email,
            uid: res.user.uid
          }

          db.collection(res.user.email).add({
            title: 'Post de ejemplo',
            contenido: 'primer contenido'
          }).then(doc => {
            commit('setUsuario', usuarioCreado)
            router.push('/')
          }).catch(error => console.log(error))

        })
        .catch(error => {
          console.log(error)
          commit('setError', error.code)
        })
    },
    ingresoUsuario({
      commit
    }, usuario) {
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(res => {
          console.log(res)
          const usuarioLogeado = {
            email: res.user.email,
            uid: res.user.uid
          }
          commit('setUsuario', usuarioLogeado)
          router.push('/')
        })
        .catch(error => {
          console.log(error)
          commit('setError', error)
        })
    },
    cerrarSesion({
      commit
    }) {
      auth.signOut()
        .then(() => {
          router.push('/acceso')
        })
    },
    detectarUsuario({
      commit
    }, usuario) {
      commit('setUsuario', usuario)
    }
  },
  getters: {
    existeUsuario(state) {
      if (state.usuario === null) {
        return false
      } else {
        return true
      }
    }
  },
  modules: {}
})