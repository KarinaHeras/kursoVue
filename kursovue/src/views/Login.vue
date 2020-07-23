<template>
    <div>
        <h1>Acceso a Usuario</h1>
        <form @submit.prevent="loginUsuario({email: email, password: pass})">
            <input type="email" placeholder="Ingrese email" v-model="email">
            <input type="password" placeholder="ingrese contraseña" v-model="pass">
       <button type="submit">Acceder</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'

export default {
    name:'Login',
    data(){
        return{
            email:'',
            pass:''
        }
    },
    methods:{
        ...mapActions(['loginUsuario'])
    },
    computed:{
        ...mapState(['error'])
    }
}
</script>