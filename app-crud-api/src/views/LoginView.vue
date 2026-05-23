<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card shadow">
          <div class="card-body">
            <h2 class="text-center mb-4">Login</h2>

            <form @submit.prevent="login">
              <div class="mb-3">
                <label class="form-label">Usuario</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="username"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  required
                />
              </div>

              <button type="submit" class="btn btn-primary w-100">
                Ingresar
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')

const router = useRouter()

const login = () => {
  // Login simulado
  if (username.value && password.value) {
    router.push('/dashboard')
  }
}
</script>