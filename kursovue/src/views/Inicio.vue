<template>
  <div>
    <h1>Ruta protegida</h1>
    <router-link to="/agregar">
      <button class="btn btn-primary mb-2">Agregar</button>
    </router-link>
    <div v-if="carga" class="text-center mt-5">
      <h3>Cargando Contenido...</h3>
      <pulse-loader :loading="carga"></pulse-loader>
    </div>
    <ul class="list-group" v-if="!carga">
      <li v-for="(item, index) in posts" :key="index" class="list-group-item">
          <p>{{item.id}} </p>
           <p> {{item.title}}</p>
            <p> {{item.contenido}}</p>
        
        <router-link :to="{name: 'Editar', params: {id: item.id}}" class="float-right ml-2">
          <button class="btn btn-warning">Editar</button>
        </router-link>
        <button @click="eliminarPost(item.id)" class="btn btn-danger float-right">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Inicio',
    computed:{
        ...mapState(['usuario', 'posts', 'carga'])
    },
     methods:{
        ...mapActions(['getPost', 'eliminarPost'])
    },
    computed:{
        ...mapState(['usuario', 'post'])
    },
    computed:{
      PulseLoader
    },
    created(){
        this.getPost()
    },
}
</script>