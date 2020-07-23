<template>
    <div>
        <h1>Editar</h1>
        {{id}} - {{post}}
        <form @submit.prevent="editarTarea(tarea)">
            <input type="text" v-model="post.title">
            <button>Editar</button>
        </form>
    </div>
</template>

<script>
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
    }
}
</script>