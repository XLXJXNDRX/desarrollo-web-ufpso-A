<template>
  <div>
    <NavbarMenu />

    <div class="container mt-4">
      <ProductoComponent />
    </div>
  </div>
</template>


<script>
import NavbarMenu from '@/components/NavbarMenu.vue'
import ProductoComponent from '@/components/ProductoComponent.vue'

export default {
  name: 'DashboardView',
  components: {
    NavbarMenu,
    ProductoComponent
  }
}
</script>