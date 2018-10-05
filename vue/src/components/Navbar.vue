<template>
  <header>
    <nav>
      <v-toolbar>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/todos">Todos</router-link>
      </v-toolbar>
    </nav>
  </header>
</template>


<script>
  export default {
    name: 'Navbar'
  }
  
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: center
  }

</style>

