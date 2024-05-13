<script setup lang="ts"></script>

<template>
  <div class="min-h-screen w-full flex justify-center items-center flex-col gap-5">
    <h1 class="text-5xl text-secondary font-bold">Kruger Corporation</h1>
    <p class="text-secondary text-2xl">Welcome to the Kruger Corporation website.</p>
    <div class="flex justify-center items-center gap-4 mt-5">
      <router-link to="/login" class="btn btn-secondary">Login</router-link>
      <router-link to="/register" class="btn btn-secondary btn-outline">Register</router-link>
    </div>
  </div>
</template>
