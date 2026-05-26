<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-4 shadow">
    <router-link class="navbar-brand font-weight-bold" to="/dashboard">Mi Dashboard</router-link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/dashboard" active-class="active">Panel</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/productos" active-class="active">Productos</router-link>
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item">
          <button @click="cerrarSesion" class="btn btn-outline-light btn-sm">Cerrar sesión</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarMenu',
  methods: {
    cerrarSesion() {
      
      localStorage.removeItem('logueado');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

.nav-link {
  font-weight: 500;
}
</style>