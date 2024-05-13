import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGlobalStore = defineStore('global', () => {
  const showModalNewEmployee = ref(false)
  const showModalEditEmployee = ref(false)
  const employedList = ref([])

  const setEdit = (state: boolean) => {
    showModalEditEmployee.value = state
  }

  const setNew = (state: boolean) => {
    showModalNewEmployee.value = state
  }

  const setEmployedList = (list: any) => {
    employedList.value = list
  }

  const fetchUsers = async (filters?: any) => {
    const token = localStorage.getItem('auth-token')
    let url = 'http://localhost:3000/api/users/list'

    if (filters) {
      const queryParams = new URLSearchParams(filters).toString();
      url += `?${queryParams}`;
    }

    await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      const data = response.data.map((item) => {
        return {
          id: item.id,
          cedula: item.cedula,
          name: item.name,
          last_name: item.last_name,
          email: item.email,
          birthdate: item.UserInformation
            ? new Date(item.UserInformation?.birthdate).toISOString().split('T')[0]
            : '',
          address: item.UserInformation?.address,
          mobile: item.UserInformation?.mobile,
          vaccinated: item.UserInformation?.vaccinated ? 'Vacunado' : 'No Vacunado',
          typeVaccine: item.UserInformation?.vaccinated
            ? item.UserInformation?.vacinne.id
            : 'No aplica',
          dateVaccine: item.UserInformation?.vaccinated
            ? new Date(item.UserInformation?.date_vaccinated).toISOString().split('T')[0]
            : 'No aplica',
          doseVaccine: item.UserInformation?.number
        }
      })
      setEmployedList(data)
    })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return {
    showModalNewEmployee,
    showModalEditEmployee,
    setEdit,
    setNew,
    employedList,
    setEmployedList,
    fetchUsers
  }
})
