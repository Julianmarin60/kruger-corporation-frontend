<template>
  <header
    class="absolute top-0 left-0 right-0 w-screen h-16 bg-secondary flex justify-between items-center"
  >
    <div class="navbar justify-between px-10">
      <a class="btn btn-ghost text-xl text-black font-bold">Kruger App</a>
      <div class="flex-none gap-2">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-secondary rounded-box w-52 text-black"
          >
            <li>
              <span class="justify-between">
                {{ sessionStore.name }}
                <span class="badge">{{ sessionStore.role }}</span>
              </span>
            </li>
            <li>
              <span class="justify-between">
                {{ sessionStore.lastName }}
              </span>
            </li>
            <li>
              <span class="justify-between">
                {{ sessionStore.email }}
              </span>
            </li>
            <li>
              <span class="justify-between">
                {{ sessionStore.cedula }}
              </span>
            </li>
            <li class="divider h-1"></li>
            <li><button @click="logout">Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <form
    @submit.prevent="submit"
    class="w-auto flex flex-col justify-center items-center w-auto gap-4"
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
          <input type="number" class="grow" placeholder="DNI" v-model="cedula.value" />
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
            <span class="label-text text-black">Fecha de nacimiento</span>
          </label>
          <input type="date" class="input input-bordered" v-model="dateBirth.value" />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text text-black">Dirección</span>
          </label>
          <input type="text" class="input input-bordered" v-model="address.value" />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text text-black">Teléfono</span>
          </label>
          <input type="text" class="input input-bordered" v-model="phone.value" />
        </div>
      </div>

      <div class="w-1/2 flex flex-col justify-center items-center">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text text-xs text-black">Estado de vacunación</span>
          </label>
          <select class="select select-bordered w-full" v-model="stateVaccine.value">
            <option value="Vacunado">Vacunado</option>
            <option value="No Vacunado">No Vacunado</option>
          </select>
        </div>
        <div class="w-full flex justify-center items-center gap-2">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text text-xs text-black">Tipo de vacuna</span>
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
              <span class="label-text text-xs text-black">Cant</span>
            </label>
            <input type="number" class="input input-bordered w-full" v-model="doseVaccine.value" />
          </div>
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text text-xs text-black">Fecha de vacunación</span>
          </label>
          <input type="date" class="input input-bordered w-full" v-model="dateVaccine.value" />
        </div>
      </div>
    </div>
    <button type="submit" class="btn">Edit Employee</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionStore } from '@/stores/session'
import { useGlobalStore } from '@/stores/global'
import axios from 'axios'

export default defineComponent({
  data() {
    const router = useRouter()
    const sessionStore = useSessionStore()
    const globalStore = useGlobalStore()
    const selectedEmployee = null

    return {
      router,
      sessionStore,
      globalStore,
      selectedEmployee,
      cedula: {
        value: '',
        message: '',
        validation: false,
        color: ''
      },
      name: {
        value: '',
        message: '',
        validation: false,
        color: ''
      },
      lastName: {
        value: '',
        message: '',
        validation: false,
        color: ''
      },
      email: {
        value: '',
        message: '',
        validation: false,
        color: ''
      },

      dateBirth: {
        value: '',
        message: '',
        validation: false,
        color: ''
      },

      phone: {
        value: '',
        message: '',
        validation: false,
        color: ''
      },

      address: {
        value: '',
        message: '',
        validation: false,
        color: ''
      },

      stateVaccine: {
        value: '',
        message: '',
        validation: false,
        color: ''
      },

      dateVaccine: {
        value: '',
        message: '',
        validation: false,
        color: ''
      },

      typeVaccine: {
        value: '',
        message: '',
        validation: false,
        color: ''
      },

      doseVaccine: {
        value: '',
        message: '',
        validation: false,
        color: ''
      }
    }
  },
  async beforeMount() {
    const token = localStorage.getItem('auth-token')
    const url = 'http://localhost:3000/api/users'
    await axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        this.cedula.value = response.data.cedula
        this.name.value = response.data.name
        this.lastName.value = response.data.last_name
        this.email.value = response.data.email
        this.dateBirth.value = response.data.UserInformation?.birthdate
          ? new Date(response.data.UserInformation.birthdate).toISOString().split('T')[0]
          : ''
        this.dateVaccine.value = response.data.UserInformation?.date_vaccinated
          ? new Date(response.data.UserInformation.date_vaccinated).toISOString().split('T')[0]
          : ''
        this.phone.value = response.data.UserInformation?.mobile
        this.address.value = response.data.UserInformation?.address
        this.stateVaccine.value = response.data.UserInformation?.vaccinated
          ? 'Vacunado'
          : 'No Vacunado'
        this.typeVaccine.value = response.data.UserInformation?.vacinne?.id
        this.doseVaccine.value = response.data.UserInformation?.number
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  },
  methods: {
    async logout() {
      const resp = await fetch('http://localhost:3000/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`
        }
      })
      if (resp.status !== 204) {
        alert('Error al cerrar sesión')
        return
      }
      await this.router.push('/')
      localStorage.removeItem('auth-token')
    },
    async submit() {
      const dniRegex = /^\d{7,10}$/
      const nameLastNameRegex = /^[a-zA-Z\s]{1,20}$/
      const addressRegex = /^[a-zA-Z0-9\s]{1,50}$/
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

      if (!dniRegex.test(this.cedula.value)) {
        this.cedula.validation = false
        this.cedula.color = 'error'
        this.cedula.message = 'La Cedula debe tener 10 dígitos.'
      } else {
        this.cedula.validation = true
        this.cedula.color = 'success'
        this.cedula.message = ''
      }

      if (!nameLastNameRegex.test(this.name.value)) {
        this.name.validation = false
        this.name.color = 'error'
        this.name.message = 'El nombre debe tener un máximo de 20 letras y espacios.'
      } else {
        this.name.validation = true
        this.name.color = 'success'
        this.name.message = ''
      }

      if (!nameLastNameRegex.test(this.lastName.value)) {
        this.lastName.validation = false
        this.lastName.color = 'error'
        this.lastName.message = 'El apellido debe tener un máximo de 20 letras y espacios.'
      } else {
        this.lastName.validation = true
        this.lastName.color = 'success'
        this.lastName.message = ''
      }

      if (!emailRegex.test(this.email.value)) {
        this.email.validation = false
        this.email.color = 'error'
        this.email.message = 'Por favor, introduce un correo electrónico válido.'
      } else {
        this.email.validation = true
        this.email.color = 'success'
        this.email.message = ''
      }

      if (!addressRegex.test(this.address.value)) {
        this.address.validation = false
        this.address.color = 'error'
        this.address.message = 'Por favor, introduce una dirección válido.'
      } else {
        this.address.validation = true
        this.address.color = 'success'
        this.address.message = ''
      }

      const dateRegex = /^\d{4}-\d{2}-\d{2}$/
      if (!dateRegex.test(this.dateBirth.value)) {
        this.dateBirth.validation = false
        this.dateBirth.color = 'error'
        this.dateBirth.message = 'Por favor, introduce una fecha de nacimiento válida.'
      } else {
        this.dateBirth.validation = true
        this.dateBirth.color = 'success'
        this.dateBirth.message = ''
      }

      if (!dateRegex.test(this.dateVaccine.value)) {
        this.dateVaccine.validation = false
        this.dateVaccine.color = 'error'
        this.dateVaccine.message = 'Por favor, introduce una fecha de vacunación válida.'
      } else {
        this.dateVaccine.validation = true
        this.dateVaccine.color = 'success'
        this.dateVaccine.message = ''
      }

      const phoneRegex = /^\d{10}$/
      if (!phoneRegex.test(this.phone.value)) {
        this.phone.validation = false
        this.phone.color = 'error'
        this.phone.message = 'Por favor, introduce un número de teléfono válido.'
      } else {
        this.phone.validation = true
        this.phone.color = 'success'
        this.phone.message = ''
      }

      const stateRegex = /^(Vacunado|No vacunado)$/
      if (!stateRegex.test(this.stateVaccine.value)) {
        this.stateVaccine.validation = false
        this.stateVaccine.color = 'error'
        this.stateVaccine.message = 'Por favor, selecciona un estado de vacunación válido.'
      } else {
        this.stateVaccine.validation = true
        this.stateVaccine.color = 'success'
        this.stateVaccine.message = ''
      }

      const doseRegex = /^[0-9]+$/
      if (!doseRegex.test(this.doseVaccine.value)) {
        this.doseVaccine.validation = false
        this.doseVaccine.color = 'error'
        this.doseVaccine.message = 'Por favor, introduce un número de dosis válido.'
      } else {
        this.doseVaccine.validation = true
        this.doseVaccine.color = 'success'
        this.doseVaccine.message = ''
      }

      console.log(this.typeVaccine.validation)
      console.log(this.typeVaccine.value)
      if (
        this.cedula.validation &&
        this.name.validation &&
        this.lastName.validation &&
        this.email.validation &&
        this.dateBirth.validation &&
        this.phone.validation &&
        this.address.validation &&
        this.stateVaccine.validation &&
        this.doseVaccine.validation &&
        this.dateVaccine.validation
      ) {
        await fetch('http://localhost:3000/api/user-information', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('auth-token')}`
          },
          credentials: 'include',
          body: JSON.stringify({
            user: {
              cedula: this.cedula.value,
              name: this.name.value,
              last_name: this.lastName.value,
              email: this.email.value
            },
            userInformation: {
              birthdate: this.dateBirth.value,
              mobile: this.phone.value,
              address: this.address.value,
              vaccinated: this.stateVaccine.value === 'Vacunado' ? true : false,
              vacinneId: this.typeVaccine.value,
              number: this.doseVaccine.value,
              date_vaccinated: this.dateVaccine.value
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
  }
})
</script>

<style scoped>
.view {
  height: 100vh;
  width: 100%;
}
</style>
