<template>
  <nav class="bg-gray-900 text-white shadow-lg p-4 sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      
      <router-link to="/" class="flex items-center gap-4 group">
        <img src="/logo.png" alt="Logo" class="h-12 w-auto group-hover:scale-105 transition duration-300">
        <span class="text-3xl font-bold">SafariTours</span>
      </router-link>
      
      <div class="hidden md:flex space-x-6 items-center">
        <router-link to="/" class="text-gray-300 hover:text-white font-medium transition">Inicio</router-link>
        <router-link to="/explora" class="text-gray-300 hover:text-white font-medium transition">Explora Africa</router-link>
        <router-link to="/safari-playa" class="text-gray-300 hover:text-white font-medium transition">Safari + Playa</router-link>
        <router-link to="/sobre-nosotros" class="text-gray-300 hover:text-white font-medium transition">Sobre Nosotros</router-link>
        <router-link to="/reservar" class="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition transform hover:scale-105 shadow-md">Reservar Ahora</router-link>
      </div>

      <div class="md:hidden">
        <button @click="isOpen = !isOpen" class="text-white focus:outline-none">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isOpen" class="md:hidden mt-4 pb-4 space-y-2 bg-gray-800 p-4 rounded-lg">
      <router-link to="/" @click="isOpen = false" class="block text-gray-300 hover:text-white py-2 border-b border-gray-700">Inicio</router-link>
      <router-link to="/explora" @click="isOpen = false" class="block text-gray-300 hover:text-white py-2 border-b border-gray-700">Explora Africa</router-link>
      <router-link to="/safari-playa" @click="isOpen = false" class="block text-gray-300 hover:text-white py-2 border-b border-gray-700">Safari + Playa</router-link>
      <router-link to="/sobre-nosotros" @click="isOpen = false" class="block text-gray-300 hover:text-white py-2 border-b border-gray-700">Sobre Nosotros</router-link>
      <router-link to="/reservar" @click="isOpen = false" class="block bg-orange-600 text-center text-white py-3 mt-4 rounded-full font-bold">Reservar Ahora</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// Variable reactiva para controlar si el menú está abierto o cerrado
const isOpen = ref(false);
</script>