<template>
  <header
    class="absolute top-0 left-0 right-0 w-screen h-16 bg-secondary flex justify-between items-center"
  >
    <div class="navbar justify-between px-10">
      <a class="btn btn-ghost text-xl text-white font-bold">Kruger App</a>
      <div class="flex-none gap-2">
        <button
          @click="globalStore.setNew(true)"
          class="btn btn-outline btn-secondary text-white border-white"
        >
          <span class="text-white">New Employee</span>
        </button>
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
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-secondary rounded-box w-52 text-white"
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

  <div class="view flex flex-col justify-center items-center pt-16 px-10 gap-2">
    <div class="w-full flex justify-between items-center">
      <h2 class="text-xl font-bold text-secondary">Employees</h2>
      <div class="flex gap-4 justify-center items-end">
        <div class="form-control w-44">
          <label class="label">
            <span class="label-text text-xs text-secondary">Estado de vacunación</span>
          </label>
          <select class="select select-bordered w-full max-w-xs" v-model="vaccinationStatus">
            <option selected value="todos">Todos</option>
            <option value="true">Vacunado</option>
            <option value="false">No Vacunado</option>
          </select>
        </div>

        <div class="form-control w-44">
          <label class="label">
            <span class="label-text text-xs text-secondary">Tipo de vacuna</span>
          </label>
          <select class="select select-bordered w-full max-w-xs" v-model="vaccineType">
            <option selected value="todos">Todas</option>
            <option value="1">Sputnik</option>
            <option value="2">AstraZeneca</option>
            <option value="3">Pfizer</option>
            <option value="4">Jhonson&Jhonson</option>
          </select>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text text-xs text-secondary">Fecha de vacunación</span>
          </label>
          <div class="flex gap-2">
            <input type="date" class="input input-bordered" v-model="startDate" />
            <input type="date" class="input input-bordered" v-model="endDate" />
          </div>
        </div>

        <button class="btn btn-secondary" @click="filter()">Buscar</button>
      </div>
    </div>
    <div class="w-full h-[85%] border rounded-2xl pb-12">
      <div
        class="w-full flex justify-between items-center uppercase font-bold text-secondary p-2 leading-4 text-xs"
      >
        <span class="w-[10%] text-center">Acciones</span>
        <span class="w-[10%] text-center">Cédula</span>
        <span class="w-[10%] text-center">Nombres</span>
        <span class="w-[10%] text-center">Apellidos</span>
        <span class="w-[14%] text-center">Correo electrónico</span>
        <span class="w-[10%] text-center">Fecha de nacimiento</span>
        <span class="w-[10%] text-center">Dirección de domicilio</span>
        <span class="w-[10%] text-center">Teléfono móvil</span>
        <span class="w-[10%] text-center">Estado de vacunación</span>
        <span class="w-[10%] text-center">Tipo de vacuna</span>
        <span class="w-[10%] text-center">Fecha de vacunación</span>
        <span class="w-[10%] text-center">Número de dosis</span>
      </div>
      <div class="w-full h-full overflow-y-scroll flex flex-col gap-4">
        <div
          v-for="(item, index) in globalStore.employedList"
          :key="index"
          class="w-full flex justify-between items-center hover:bg-secondary/50 p-2"
        >
          <div class="w-[10%] text-center flex justify-center items-center">
            <button @click="editItem(item)">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="blue"
                  d="m21.7 13.35l-1 1l-2.05-2.05l1-1a.55.55 0 0 1 .77 0l1.28 1.28c.21.21.21.56 0 .77M12 18.94l6.06-6.06l2.05 2.05L14.06 21H12zM12 14c-4.42 0-8 1.79-8 4v2h6v-1.89l4-4c-.66-.08-1.33-.11-2-.11m0-10a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"
                />
              </svg>
            </button>
            <button @click="deleteItem(item)">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="red"
                  d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                />
              </svg>
            </button>
          </div>
          <span class="w-[10%] text-center">{{ item.cedula }}</span>
          <span class="w-[10%] text-center">{{ item.name }}</span>
          <span class="w-[10%] text-center">{{ item.last_name }}</span>
          <span class="w-[14%] text-center">{{ item.email }}</span>
          <span class="w-[10%] text-center">{{ item.birthdate }}</span>
          <span class="w-[10%] text-center">{{ item.address }}</span>
          <span class="w-[10%] text-center">{{ item.mobile }}</span>
          <span class="w-[10%] text-center">{{ item.vaccinated }}</span>
          <span class="w-[10%] text-center">{{ item.typeVaccine }}</span>
          <span class="w-[10%] text-center">{{ item.dateVaccine }}</span>
          <span class="w-[10%] text-center">{{ item.doseVaccine }}</span>
        </div>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <dialog
      v-if="globalStore.showModalNewEmployee"
      class="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 flex justify-center items-center bg-black/75"
    >
      <div class="flex flex-col justify-center items-center bg-secondary p-8 rounded-2xl w-96">
        <h2 class="text-xl font-bold text-white mb-8">New Employee</h2>
        <EmployeeRegisterForm />
        <button
          @click="globalStore.setNew(false)"
          class="btn btn-outline btn-secondary text-white border-white mt-4"
        >
          <span class="text-white">Cancel</span>
        </button>
      </div>
    </dialog>
  </Teleport>

  <Teleport to="body">
    <dialog
      v-if="globalStore.showModalEditEmployee"
      class="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 flex justify-center items-center bg-black/75"
    >
      <div class="flex flex-col justify-center items-center bg-secondary p-8 rounded-2xl w-[500px]">
        <h2 class="text-xl font-bold text-white">Edit Employee</h2>
        <p class="text-white text-base mb-8">ID: {{ selectedEmployee.id }}</p>
        <EmployeeEditForm :Employee="selectedEmployee" />
        <button
          @click="globalStore.setEdit(false), globalStore.fetchUsers()"
          class="btn btn-outline btn-secondary text-white border-white mt-4"
        >
          <span class="text-white">Cancel</span>
        </button>
      </div>
    </dialog>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import EmployeeRegisterForm from '@/components/forms/EmployeeRegisterForm.vue'
import EmployeeEditForm from '@/components/forms/EmployeeEditForm.vue'
import { useSessionStore } from '@/stores/session'
import { useGlobalStore } from '@/stores/global'

export default defineComponent({
  components: {
    EmployeeRegisterForm,
    EmployeeEditForm
  },
  data() {
    const router = useRouter()
    const sessionStore = useSessionStore()
    const globalStore = useGlobalStore()
    const selectedEmployee = null
    const vaccinationStatus = 'todos'
    const vaccineType = 'todos'
    const startDate = null
    const endDate = null

    return {
      router,
      sessionStore,
      globalStore,
      selectedEmployee,
      vaccinationStatus,
      vaccineType,
      startDate,
      endDate
    }
  },
  beforeMount() {
    this.globalStore.fetchUsers()
  },
  methods: {
    editItem(item) {
      this.selectedEmployee = item
      this.globalStore.setEdit(true)
    },
    async deleteItem(item) {
      console.log('Eliminar', item)
      const token = localStorage.getItem('auth-token')
      await fetch(`http://localhost:3000/api/users/${item.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        credentials: 'include'
      })
        .then((response) => response.json())
        .then(() => {
          this.globalStore.fetchUsers()
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    },
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

    async filter() {
      await this.globalStore.fetchUsers({
        vaccinationStatus: this.vaccinationStatus,
        vaccineType: this.vaccineType,
        startDate: this.startDate,
        endDate: this.endDate
      })
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
