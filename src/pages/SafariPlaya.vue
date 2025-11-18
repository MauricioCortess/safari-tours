<template>
  <div class="bg-[#f3efe0] min-h-screen py-16">
    <div class="container mx-auto px-4">
      
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-amber-900 mb-2">Ejemplo de nuestros Itinerarios</h2>
        <p class="text-xl text-amber-800 font-light">Nuestro safari más vendido: Aventura y Relax</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div 
          v-for="(item, index) in itinerario" 
          :key="index" 
          class="bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition duration-300"
        >
          <div class="h-64 w-full overflow-hidden rounded-xl mb-4">
            <img 
              :src="item.img" 
              :alt="item.titulo" 
              class="w-full h-full object-cover hover:scale-110 transition duration-500"
            >
          </div>
          
          <div class="text-center pb-2">
            <h3 class="text-sm font-bold text-gray-800 uppercase tracking-wider mb-1">
              {{ item.dia }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed px-2">
              {{ item.descripcion }}
            </p>
          </div>
        </div>

      </div>
      
      <div class="text-center mt-16">
         <router-link to="/reservar" class="inline-block border-2 border-amber-800 text-amber-900 px-10 py-3 rounded-full font-bold hover:bg-amber-800 hover:text-white transition duration-300">
            COTIZAR ESTE VIAJE
         </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Datos de las 8 cartas (simulando un itinerario completo)
const itinerario = ref([
  {
    dia: 'Día 1 y 2',
    descripcion: 'Llegada a Nairobi y día completo de relax en la capital.',
    img: 'https://images.unsplash.com/photo-1547471080-7541e8856c76?q=80&w=800&auto=format&fit=crop' // Nairobi
  },
  {
    dia: 'Día 3 y 4',
    descripcion: 'Parque Nacional de Samburu: Elefantes y cultura local.',
    img: 'https://images.unsplash.com/photo-1550066593-e8eb80a06c92?q=80&w=800&auto=format&fit=crop' // Elefantes
  },
  {
    dia: 'Día 5 y 6',
    descripcion: 'Parque Nacional del Lago Nakuru: Flamencos y rinocerontes.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop' // Lago
  },
  {
    dia: 'Día 7 y 8',
    descripcion: 'Masai Mara: En busca de los 5 grandes y la migración.',
    img: 'https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=800&auto=format&fit=crop' // Leon
  },
  {
    dia: 'Día 9',
    descripcion: 'Vuelo hacia la costa: Llegada al paraíso de Diani Beach.',
    img: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=800&auto=format&fit=crop' // Playa
  },
  {
    dia: 'Día 10 y 11',
    descripcion: 'Días libres para disfrutar del sol, arena blanca y mar turquesa.',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop' // Playa Relax
  },
  {
    dia: 'Día 12',
    descripcion: 'Excursión en barco y snorkel en los arrecifes de coral.',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop' // Snorkel
  },
  {
    dia: 'Día 13',
    descripcion: 'Despedida de África y traslado al aeropuerto para el regreso.',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop' // Avión
  }
])
</script>