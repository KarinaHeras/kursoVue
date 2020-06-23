<template>
  <div class="home">
    <navigation/>
    <h1>Home</h1>
    <p v-if="userLogged">User loggued: {{userLogged}}</p>
  </div>
</template>

<script>
import Navigation from "..navigation/navigation";
import auth from "@/logic/auth";
export default {
  name: "Home",
  components: {
    navigation: Navigation
  },
  computed: {
    userLogged() {
      return auth.getUserLogged();
    }
  }
};
</script>

<style>
</style>
