<template>
    <div>
        <h1>Ruta protegida</h1>
        <router-link to='/agregar'>
            <button>Agregar</button>
        </router-link>
        <p>{{usuario.email}}</p>
        <ul>
            <li v-for="(item, index) in tareas" :key="index">
                {{item.id}} - {{item.nombre}}
                <router-link :to="{name: 'Editar', params: {id: item.id}}">
                    <button>Editar</button>
                </router-link>
                <button @click="eliminarPost(item.id)">Eliminar</button>

            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Inicio',
    created(){
        this.getPost()
    },
     methods:{
        ...mapActions(['getPost', 'eliminarPost'])
    },
    computed:{
        ...mapState(['usuario', 'post'])
    }
}
</script>