import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useSessionStore } from '@/stores/session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
      beforeEnter: async (to, from, next) => {
        const authToken = localStorage.getItem('auth-token')
        const sessionStore = useSessionStore()

        if (authToken) {
          await fetch('http://localhost:3000/api/auth/refresh', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authToken}`
            },
            credentials: 'include',
          }).then((response) => response.json())
            .then((data) => {
              if (data.accessToken) {
                localStorage.setItem('auth-token', data.accessToken)
                sessionStore.setUser(data)
              }
            })
            .catch((error) => {
              console.error('Error:', error)

            })
          next()
        } else {
          next({ name: 'login' })
        }
      }
    },
    {
      path: '/employed',
      name: 'employed',
      component: () => import('../views/EmployedView.vue'),
      beforeEnter: async (to, from, next) => {
        const authToken = localStorage.getItem('auth-token')
        const sessionStore = useSessionStore()

        if (authToken) {
          await fetch('http://localhost:3000/api/auth/refresh', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authToken}`
            },
            credentials: 'include',
          }).then((response) => response.json())
            .then((data) => {
              if (data.accessToken) {
                localStorage.setItem('auth-token', data.accessToken)
                sessionStore.setUser(data)
              }
            })
            .catch((error) => {
              console.error('Error:', error)

            })
          next()
        } else {
          next({ name: 'login' })
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

export default router
