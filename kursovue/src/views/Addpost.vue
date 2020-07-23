<template>
    <div>
        <h1>Agregar</h1>
        <form @submit.prevent="agregarPost(title)">
            <input type="text" v-model="title">
            <button type="submit">Agregar</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Agregar',
    data() {
        return {
            nombre: ''
        }
    },
    methods:{
        ...mapActions(['agregarPost'])
    }
}
</script>