<template>
    <div>
        <h1>Ruta protegida</h1>
        <p>{{usuario.email}}</p>
        <ul>
            <li v-for="(item, index) in tareas" :key="index">
                {{item.id}} - {{item.nombre}}
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
    computed:{
        ...mapState(['usuario', 'post'])
    }
}
</script>