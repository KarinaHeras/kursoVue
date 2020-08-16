<template>
  <div>
    <h1>Ruta protegida</h1>
    <router-link :to="{name: 'agregar'}">
      <button class="btn btn-primary mb-2">Agregar</button>
    </router-link>
    <form @submit.prevent="buscador(texto)">
        <input type="text" placeholder="buscar...." class="form-control mt-5" v-model="texto" v-on:keyup="buscador(texto)">
    </form>
    <div v-if="carga" class="text-center mt-5">
      <h3>Cargando Contenido...</h3>
      <pulse-loader :loading="carga"></pulse-loader>
    </div>
   
    <ul class="list-group" v-if="!carga">
      <li v-for="item of arregloFiltrado" :key="item.id" class="list-group-item">
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
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
    name: 'Inicio',

    data(){
        return{
            texto:''
        }
    },
    computed:{
        ...mapState(['usuario', 'posts', 'carga']),
        ...mapGetters(['arregloFiltrado'])
    },
     methods:{
        ...mapActions(['getPost', 'eliminarPost', 'buscador'])
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