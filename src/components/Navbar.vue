<template>
  <nav class="bg-gray-900 text-white shadow-lg p-4 sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      
      <router-link to="/" class="flex items-center gap-4 group">
        <img src="/logo.png" alt="Logo SafariTours" class="h-12 w-auto group-hover:scale-105 transition duration-300">
        
        <span class="text-3xl font-bold">
          SafariTours
        </span>
      </router-link>
      
      <div class="hidden md:flex space-x-6 items-center">
        <router-link to="/" class="text-gray-300 hover:text-white font-medium transition duration-300">
          Inicio
        </router-link>
        
        <router-link to="/explora" class="text-gray-300 hover:text-white font-medium transition duration-300">
          Explora Africa
        </router-link>

        <router-link to="/safari-playa" class="text-gray-300 hover:text-white font-medium transition duration-300">
          Safari + Playa
        </router-link>
        
        <router-link to="/sobre-nosotros" class="text-gray-300 hover:text-white font-medium transition duration-300">
          Sobre Nosotros
        </router-link>
        
        <router-link to="/reservar" class="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition duration-300 transform hover:scale-105 shadow-md">
          Reservar Ahora
        </router-link>
      </div>

      <div class="md:hidden">
        <button class="text-white">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No se requiere lógica adicional
</script>