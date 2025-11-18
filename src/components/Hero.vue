<template>
  <div class="relative h-[85vh] min-h-[500px] flex items-center justify-center text-white text-center">
    
    <div class="absolute inset-0 z-0">
      <img 
        src="/hero-bg.jpg" 
        alt="Safari en África" 
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-gray-900 opacity-40"></div> 
    </div>

    <div class="relative z-10 p-4 max-w-4xl">
      <h1 class="text-5xl md:text-7xl font-extrabold mb-4 uppercase tracking-wide leading-tight drop-shadow-lg">
        EL SAFARI DE TUS SUEÑOS
      </h1>
      <p class="text-xl md:text-3xl mb-8 font-light tracking-wide drop-shadow-md">
        DISEÑAMOS TU VIAJE EN AFRICA ORIENTAL
      </p>
      
      <router-link 
        to="/reservar" 
        class="inline-block bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300 transform hover:scale-105 shadow-xl uppercase tracking-wider"
      >
        COMIENZA LA AVENTURA
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Sin lógica extra
</script>