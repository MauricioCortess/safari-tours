<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    <img :src="tour.imagenUrl" alt="Imagen del tour" class="w-full h-48 object-cover">
    <div class="p-6">
      <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ tour.titulo }}</h3>
      <p class="text-gray-600 mb-4">{{ tour.duracion }} Días / {{ tour.noches }} Noches</p>
      <p class="text-gray-700 mb-4">{{ tour.descripcionCorta }}</p>
      <div class="flex justify-between items-center">
        <span class="text-2xl font-bold text-green-700">Desde ${{ tour.precio }}</span>
        <a href="#" class="text-green-700 font-semibold hover:underline">Ver Detalles &rarr;</a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Definimos las "props" que este componente espera recibir
defineProps({
  tour: Object // Esperamos un objeto "tour" con toda la info
})
</script>