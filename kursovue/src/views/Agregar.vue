<template>
    <div>
        <h1>Agregar</h1>
        <form @submit.prevent="agregarPost($v.title.$model)">
            <input type="text" v-model="$v.title.$model" placeholder="Ingresa un titulo" class="form-control mb-2">
             <input type="text" v-model="$v.contenido.$model" placeholder="ingrese el comentario" class="form-control mb-2">

            <button type="submit" class="btn btn-primary" :disabled="$v.$invalid || carga">Agregar</button>
        </form>
         <small class="text-danger d-block" v-if="!$v.title.required">Campo Requerido</small>
    <small class="text-danger d-block" v-if="!$v.title.minLength">Mínimo 4 carácteres</small>
    {{$v}}
    </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Agregar',
    data() {
        return {
            tittle: "",
            contenido: ""
        }
    },
    methods:{
        ...mapActions(['agregarPost'])
    },
    computed:{
        ...mapState(['carga'])
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
      },
      computed:{
    ...mapState(['carga'])
  }
  }
}
      };
</script>