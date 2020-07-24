<template>
  <div>
    <h1>Acceso de usuarios</h1>
    <form @submit.prevent="ingresoUsuario({email: $v.email.$model, password: $v.pass.$model})">
      <input
        type="email"
        placeholder="Ingrese email"
        v-model="$v.email.$model"
        class="form-control mb-2"
      />
      <small class="text-danger d-block mb-2" v-if="!$v.email.required">Campo Requerido</small>
      <small class="text-danger d-block mb-2" v-if="!$v.email.email">Email no válido</small>
      <input
        type="password"
        placeholder="Ingrese contraseña"
        v-model="$v.pass.$model"
        class="form-control mb-2"
      />
      <small class="text-danger d-block mb-2" v-if="!$v.pass.minLength">Mínimo 6 carácteres</small>
      <small class="text-danger d-block mb-2" v-if="!$v.pass.required">Campo Requerido</small>

      <button type="submit" class="btn btn-primary" :disabled="$v.$invalid">Acceder</button>
    </form>
    <!-- <p>{{error}}</p> -->
    <p v-if="error">Usuario o contraseña incorrecta</p>
    {{$v.email}}
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";
export default {
  name: "Acceso",
  data() {
    return {
      email: "",
      pass: ""
    };
  },
  methods: {
    ...mapActions(["ingresoUsuario"])
  },
  computed: {
    ...mapState(["error"])
  },
  validations: {
    email: {
      required,
      email
    },
    pass: {
      required,
      minLength: minLength(6)
    }
  }
};
</script>