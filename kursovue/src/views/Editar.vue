<template>
    <div>
        <h1>Editar</h1>
        <form @submit.prevent="editarPost(post)">
            <input type="text" v-model="$v.post.title.$model" class="form-control mb-2">
             <input type="text" v-model="$v.post.contenido.$model" class="form-control mb-2">
            <button class="btn btn-primary" :disabled="$v.$invalid" >Editar</button>
        </form>
        <small class="text-danger d-block" v-if="!$v.tarea.nombre.required">Campo Requerido</small>
    <small class="text-danger d-block" v-if="!$v.tarea.nombre.minLength">Mínimo 4 carácteres</small>
    <p>    {{$v.post.title}}</p>
        <p>    {{$v.post.contenido}}</p>

    </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

import {mapActions, mapState} from 'vuex'
export default {
    name: 'Editar',
    data(){
        return {
            id: this.$route.params.id
        }
    },
    created(){
        this.getPost(this.id)
    },
    methods:{
        ...mapActions(['getPost', 'editarPost'])
    },
    computed:{
        ...mapState(['post'])
    },
     validations: {
    post: {
      title: {
        required,
        minLength: minLength(4)
      },
      contenido: {
        required,
        minLength: minLength(4)
      }
    }
  }
}
</script>