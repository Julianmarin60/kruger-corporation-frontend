<template>
  <div class="flex justify-center items-center flex-col gap-5 w-[320px]">
    <router-link to="/" class="absolute top-5 right-5 btn btn-secondary btn-outline">
      Back
    </router-link>

    <h1 class="text-2xl font-bold text-secondary">Administrator Register</h1>
    <AdministratorRegisterForm />
  </div>
</template>

<script setup lang="ts">
import AdministratorRegisterForm from '@/components/forms/AdministratorRegisterForm.vue'
</script>

<style scoped></style>
