import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
  const user = ref({
    accessToken: '',
    user: {
      id: null,
      name: '',
      last_name: '',
      email: '',
      password: '',
      cedula: '',
      createdAt: '',
      role: ''
    }
  })

  const setUser = (newUser) => {
    user.value = newUser
  }

  const clearUser = () => {
    user.value = {
      accessToken: '',
      user: {
        id: null,
        name: '',
        last_name: '',
        email: '',
        password: '',
        cedula: '',
        createdAt: '',
        role: ''
      }
    }
  }

  const accessToken = computed(() => user.value.accessToken)
  const id = computed(() => user.value.user.id)
  const name = computed(() => user.value.user.name)
  const lastName = computed(() => user.value.user.last_name)
  const email = computed(() => user.value.user.email)
  const password = computed(() => user.value.user.password)
  const cedula = computed(() => user.value.user.cedula)
  const createdAt = computed(() => user.value.user.createdAt)
  const role = computed(() => user.value.user.role)

  return {
    setUser,
    clearUser,
    accessToken,
    id,
    name,
    lastName,
    email,
    password,
    cedula,
    createdAt,
    role
  }
})
