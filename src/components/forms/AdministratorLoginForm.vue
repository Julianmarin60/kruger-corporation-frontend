<template>
  <form @submit.prevent="submit" class="flex flex-col justify-center items-center w-full gap-4">
    <div class="form-control w-full max-w-xs">
      <label
        class="input input-bordered flex items-center gap-2"
        :class="{
          'input-success text-success': username.color === 'success',
          'input-error text-error': username.color === 'error'
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-4 h-4 opacity-70"
        >
          <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
          />
        </svg>
        <input type="text" class="grow" placeholder="Username" v-model="username.value" />
      </label>
      <div v-if="username.message" class="label">
        <span
          class="label-text-alt"
          :class="{
            'text-success': username.color === 'success',
            'text-error': username.color === 'error'
          }"
        >
          {{ username.message }}
        </span>
      </div>
    </div>
    <div class="form-control w-full max-w-xs">
      <label
        class="input input-bordered flex items-center gap-2"
        :class="{
          'input-success text-success': password.color === 'success',
          'input-error text-error': password.color === 'error'
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-4 h-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clip-rule="evenodd"
          />
        </svg>
        <input
          id="password"
          type="password"
          class="grow"
          placeholder="password"
          v-model="password.value"
        />
        <button @click.prevent="showPassword()">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z"
            />
          </svg>
        </button>
      </label>
      <div v-if="password.message" class="label">
        <span
          class="label-text-alt"
          :class="{
            'text-success': password.color === 'success',
            'text-error': password.color === 'error'
          }"
        >
          {{ password.message }}
        </span>
      </div>
    </div>
    <button type="submit" class="btn">Login</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionStore } from '@/stores/session'

const router = useRouter()

const sessionStore = useSessionStore()

let password = ref({
  value: '',
  message: '',
  validation: false,
  color: ''
})
let username = ref({
  value: '',
  message: '',
  validation: false,
  color: ''
})

const showPassword = () => {
  const passwordInput = document.getElementById('password')
  if (passwordInput.getAttribute('type') === 'password') {
    passwordInput.setAttribute('type', 'text')
  } else {
    passwordInput.setAttribute('type', 'password')
  }
}

const submit = async () => {
  await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      email: username.value.value,
      password: password.value.value
    })
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        alert(data.message)
        username.value.validation = false
        username.value.color = 'error'
        username.value.message = ''
        password.value.validation = false
        password.value.color = 'error'
        password.value.message = ''
      } else {
        sessionStore.setUser(data)
        localStorage.setItem('auth-token', data.accessToken)
        if (data.user.role === 'ADMIN') {
          router.push('/admin')
        } else {
          router.push('/employed')
        }
      }
    })
}
</script>

<style scoped></style>
