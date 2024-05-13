<template>
  <form @submit.prevent="submit" class="flex flex-col justify-center items-center w-full gap-4">
    <div class="form-control w-full max-w-xs">
      <label
        class="input input-bordered flex items-center gap-2"
        :class="{
          'input-success text-success': email.color === 'success',
          'input-error text-error': email.color === 'error'
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-4 h-4 opacity-70"
        >
          <path
            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
          />
          <path
            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
          />
        </svg>
        <input type="text" class="grow" placeholder="Email" v-model="email.value" />
      </label>
      <div v-if="email.message" class="label">
        <span
          class="label-text-alt"
          :class="{
            'text-success': email.color === 'success',
            'text-error': email.color === 'error'
          }"
        >
          {{ email.message }}
        </span>
      </div>
    </div>
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
    <button type="submit" class="btn">Register</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

let email = ref({
  value: '',
  message: '',
  validation: false,
  color: ''
})
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

const submit = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/
  const usernameRegex = /^[a-zA-Z0-9]{10,}$/

  if (!emailRegex.test(email.value.value)) {
    email.value.validation = false
    email.value.color = 'error'
    email.value.message = 'Por favor, introduce un correo electrónico válido.'
  } else {
    email.value.validation = true
    email.value.color = 'success'
    email.value.message = ''
  }

  if (!usernameRegex.test(username.value.value)) {
    username.value.validation = false
    username.value.color = 'error'
    username.value.message =
      'El nombre de usuario debe tener al menos 10 caracteres y solo puede contener letras y números.'
  } else {
    username.value.validation = true
    username.value.color = 'success'
    username.value.message = ''
  }

  if (!passwordRegex.test(password.value.value)) {
    password.value.validation = false
    password.value.message =
      'La contraseña debe tener al menos 8 caracteres, un carácter especial, un número y una letra mayúscula.'
    password.value.color = 'error'
  } else {
    password.value.validation = true
    password.value.color = 'success'
    password.value.message = ''
  }

  if (email.value.validation && password.value.validation && username.value.validation) {
    fetch('https://d69a-186-159-18-172.ngrok-free.app/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value.value,
        username: username.value.value,
        password: password.value.value
      })
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('auth-token', username.value.value)
        router.push('/admin')
      })
  }
}
</script>

<style scoped></style>
