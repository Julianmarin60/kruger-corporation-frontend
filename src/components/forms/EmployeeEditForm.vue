<template>
  <form
    @submit.prevent="submit"
    class="w-full flex flex-col justify-center items-center w-full gap-4"
  >
    <div class="w-full flex flex-col justify-center items-center gap-2">
      <div class="form-control w-full">
        <label
          class="input input-bordered flex items-center gap-2"
          :class="{
            'input-success text-success': cedula.color === 'success',
            'input-error text-error': cedula.color === 'error'
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
          <input type="number" class="grow" placeholder="Cedula" v-model="cedula.value" />
        </label>
        <div v-if="cedula.message" class="label">
          <span
            class="label-text-alt"
            :class="{
              'text-success': cedula.color === 'success',
              'text-error': cedula.color === 'error'
            }"
          >
            {{ cedula.message }}
          </span>
        </div>
      </div>
      <div class="form-control w-full">
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
      <div class="form-control w-full">
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
      <div class="form-control w-full">
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
    </div>

    <div class="w-full flex justify-center items-center gap-4">
      <div class="w-1/2 flex flex-col justify-center items-center">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text text-white">Fecha de nacimiento</span>
          </label>
          <input type="date" class="input input-bordered" v-model="dateBirth.value" />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text text-white">Dirección</span>
          </label>
          <input type="text" class="input input-bordered" v-model="address.value" />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text text-white">Teléfono</span>
          </label>
          <input type="text" class="input input-bordered" v-model="phone.value" />
        </div>
      </div>

      <div class="w-1/2 flex flex-col justify-center items-center">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text text-xs text-white">Estado de vacunación</span>
          </label>
          <select class="select select-bordered w-full" v-model="stateVaccine.value">
            <option value="Vacunado">Vacunado</option>
            <option value="No Vacunado">No Vacunado</option>
          </select>
        </div>
        <div class="w-full flex justify-center items-center gap-2">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text text-xs text-white">Tipo de vacuna</span>
            </label>
            <select class="select select-bordered w-full" v-model="typeVaccine.value">
              <option value="1">Sputnik</option>
              <option value="2">AstraZeneca</option>
              <option value="3">Pfizer</option>
              <option value="4">Jhonson&Jhonson</option>
            </select>
          </div>
          <div class="form-control w-20">
            <label class="label">
              <span class="label-text text-xs text-white">Cant</span>
            </label>
            <input type="number" class="input input-bordered w-full" v-model="doseVaccine.value" />
          </div>
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text text-xs text-white">Fecha de vacunación</span>
          </label>
          <input type="date" class="input input-bordered w-full" v-model="dateVaccine.value" />
        </div>
      </div>
    </div>
    <button type="submit" class="btn">Edit Employee</button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  Employee: Object
})

const router = useRouter()

let cedula = ref({
  value: props.Employee?.dni || '',
  message: '',
  validation: false,
  color: ''
})
let name = ref({
  value: props.Employee?.name || '',
  message: '',
  validation: false,
  color: ''
})
let lastName = ref({
  value: props.Employee?.last_name || '',
  message: '',
  validation: false,
  color: ''
})
let email = ref({
  value: props.Employee?.email || '',
  message: '',
  validation: false,
  color: ''
})

let dateBirth = ref({
  value: props.Employee?.dateBirth || '',
  message: '',
  validation: false,
  color: ''
})

let phone = ref({
  value: props.Employee?.phone || '',
  message: '',
  validation: false,
  color: ''
})

let address = ref({
  value: props.Employee?.address || '',
  message: '',
  validation: false,
  color: ''
})

let stateVaccine = ref({
  value: props.Employee?.stateVaccine || 'No Vacunado',
  message: '',
  validation: false,
  color: ''
})

let dateVaccine = ref({
  value: props.Employee?.dateVaccine || '',
  message: '',
  validation: false,
  color: ''
})

let typeVaccine = ref({
  value: props.Employee?.typeVaccine || '',
  message: '',
  validation: false,
  color: ''
})

let doseVaccine = ref({
  value: props.Employee?.doseVaccine || '',
  message: '',
  validation: false,
  color: ''
})

const submit = async () => {
  const dniRegex = /^\d{10}$/
  const nameLastNameRegex = /^[a-zA-Z\s]{1,20}$/
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (!dniRegex.test(cedula.value.value)) {
    cedula.value.validation = false
    cedula.value.color = 'error'
    cedula.value.message = 'El DNI debe tener 10 dígitos.'
  } else {
    cedula.value.validation = true
    cedula.value.color = 'success'
    cedula.value.message = ''
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
    cedula.value.validation &&
    name.value.validation &&
    lastName.value.validation &&
    email.value.validation
  ) {
    await fetch('http://localhost:3000/api/user-information/' + props.Employee.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('auth-token')}`
      },
      credentials: 'include',
      body: JSON.stringify({
        user: {
          cedula: cedula.value.value,
          name: name.value.value,
          last_name: lastName.value.value,
          email: email.value.value
        },
        userInformation: {
          birthdate: dateBirth.value.value,
          mobile: phone.value.value,
          address: address.value.value,
          vaccinated: stateVaccine.value.value === 'Vacunado' ? true : false,
          vacinneId: Number(typeVaccine.value.value),
          number: doseVaccine.value.value,
          date_vaccinated: dateVaccine.value.value
        }
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.message)
          this.cedula.validation = false
          this.cedula.color = 'error'
          this.cedula.message = ''
          this.name.validation = false
          this.name.color = 'error'
          this.name.message = ''
          this.lastName.validation = false
          this.lastName.color = 'error'
          this.lastName.message = ''
          this.email.validation = false
          this.email.color = 'error'
          this.email.message = ''
          this.dateBirth.validation = false
          this.dateBirth.color = 'error'
          this.dateBirth.message = ''
          this.phone.validation = false
          this.phone.color = 'error'
          this.phone.message = ''
          this.address.validation = false
          this.address.color = 'error'
          this.address.message = ''
          this.stateVaccine.validation = false
          this.stateVaccine.color = 'error'
          this.stateVaccine.message = ''
          this.typeVaccine.validation = false
          this.typeVaccine.color = 'error'
          this.typeVaccine.message = ''
          this.doseVaccine.validation = false
          this.doseVaccine.color = 'error'
          this.doseVaccine.message = ''
        }
      })
  }
}

watch(
  props.Employee,
  (newVal) => {
    if (newVal) {
      cedula.value.value = newVal.cedula
      name.value.value = newVal.name
      lastName.value.value = newVal.last_name
      email.value.value = newVal.email
      dateBirth.value.value = newVal.birthdate
      phone.value.value = newVal.mobile
      address.value.value = newVal.address
      stateVaccine.value.value = newVal.vaccinated
      dateVaccine.value.value = newVal.dateVaccine
      typeVaccine.value.value = newVal.typeVaccine
      doseVaccine.value.value = newVal.doseVaccine
    }
  },
  { immediate: true }
)
</script>

<style scoped></style>
