<template>
  <form @submit.prevent="submit" class="flex flex-col justify-center items-center w-full gap-4">
    <div class="form-control w-full max-w-xs">
      <label
        class="input input-bordered flex items-center gap-2"
        :class="{
          'input-success text-success': dni.color === 'success',
          'input-error text-error': dni.color === 'error'
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
        <input type="number" class="grow" placeholder="DNI" v-model="dni.value" />
      </label>
      <div v-if="dni.message" class="label">
        <span
          class="label-text-alt"
          :class="{
            'text-success': dni.color === 'success',
            'text-error': dni.color === 'error'
          }"
        >
          {{ dni.message }}
        </span>
      </div>
    </div>
    <div class="form-control w-full max-w-xs">
      <label
        class="input input-bordered flex items-center gap-2"
        :class="{
          'input-success text-success': name.color === 'success',
          'input-error text-error': name.color === 'error'
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
        <input type="text" class="grow" placeholder="Name" v-model="name.value" />
      </label>
      <div v-if="name.message" class="label">
        <span
          class="label-text-alt"
          :class="{
            'text-success': name.color === 'success',
            'text-error': name.color === 'error'
          }"
        >
          {{ name.message }}
        </span>
      </div>
    </div>
    <div class="form-control w-full max-w-xs">
      <label
        class="input input-bordered flex items-center gap-2"
        :class="{
          'input-success text-success': lastName.color === 'success',
          'input-error text-error': lastName.color === 'error'
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
        <input type="text" class="grow" placeholder="Last Name" v-model="lastName.value" />
      </label>
      <div v-if="lastName.message" class="label">
        <span
          class="label-text-alt"
          :class="{
            'text-success': lastName.color === 'success',
            'text-error': lastName.color === 'error'
          }"
        >
          {{ lastName.message }}
        </span>
      </div>
    </div>
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
        <input type="email" class="grow" placeholder="Email" v-model="email.value" />
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
    <button type="submit" class="btn">Register Employee</button>
  </form>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/global'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const globalStore = useGlobalStore()

let dni = ref({
  value: '',
  message: '',
  validation: false,
  color: ''
})
let name = ref({
  value: '',
  message: '',
  validation: false,
  color: ''
})
let lastName = ref({
  value: '',
  message: '',
  validation: false,
  color: ''
})
let email = ref({
  value: '',
  message: '',
  validation: false,
  color: ''
})

const submit = async () => {
  const dniRegex = /^\d{10}$/
  const nameLastNameRegex = /^[a-zA-Z\s]{1,20}$/
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (!dniRegex.test(dni.value.value)) {
    dni.value.validation = false
    dni.value.color = 'error'
    dni.value.message = 'El DNI debe tener 10 dígitos.'
  } else {
    dni.value.validation = true
    dni.value.color = 'success'
    dni.value.message = ''
  }

  if (!nameLastNameRegex.test(name.value.value)) {
    name.value.validation = false
    name.value.color = 'error'
    name.value.message = 'El nombre debe tener un máximo de 20 letras y espacios.'
  } else {
    name.value.validation = true
    name.value.color = 'success'
    name.value.message = ''
  }

  if (!nameLastNameRegex.test(lastName.value.value)) {
    lastName.value.validation = false
    lastName.value.color = 'error'
    lastName.value.message = 'El apellido debe tener un máximo de 20 letras y espacios.'
  } else {
    lastName.value.validation = true
    lastName.value.color = 'success'
    lastName.value.message = ''
  }

  if (!emailRegex.test(email.value.value)) {
    email.value.validation = false
    email.value.color = 'error'
    email.value.message = 'Por favor, introduce un correo electrónico válido.'
  } else {
    email.value.validation = true
    email.value.color = 'success'
    email.value.message = ''
  }

  if (
    dni.value.validation &&
    name.value.validation &&
    lastName.value.validation &&
    email.value.validation
  ) {
    await fetch('http://localhost:3000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cedula: dni.value.value.toString(),
        name: name.value.value,
        lastName: lastName.value.value,
        email: email.value.value
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.message)
          dni.value.validation = false
          dni.value.color = 'error'
          dni.value.message = ''
          name.value.validation = false
          name.value.color = 'error'
          name.value.message = ''
          lastName.value.validation = false
          lastName.value.color = 'error'
          lastName.value.message = ''
          email.value.validation = false
          email.value.color = 'error'
          email.value.message = ''
        } else {
          router.push('/admin')
          globalStore.setNew(false)
          globalStore.fetchUsers()
        }
      })
  }
}
</script>

<style scoped></style>
