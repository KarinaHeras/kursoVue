<template>
  <div class="container mt-2">
    <div>
      <router-link to="/" v-if="existeUsuario" class="btn btn-dark">Inicio</router-link> |
      <router-link to="/registro" v-if="!existeUsuario" class="btn btn-dark">Registro</router-link> |
      <router-link to="/login" v-if="!existeUsuario" class="btn btn-dark">Login</router-link> |
      <button @click="cerrarSesion" v-if="existeUsuario">Cerrar Sesión</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapGetters(['existeUsuario'])
  }
}
</script>