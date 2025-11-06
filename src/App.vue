<template>
  <div id="app" class="bg-gray-50 min-h-screen">
    <Navbar />
    
    <main>
      <Hero />

      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Nuestros Safaris Populares</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <TourCard 
              v-for="tour in toursData" 
              :key="tour.id" 
              :tour="tour" 
            />

          </div>
        </div>
      </section>
      
      </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import TourCard from './components/TourCard.vue'

// --- Nuestros Datos ---
// En un proyecto real, esto vendría de una base de datos
const toursData = ref([
  {
    id: 1,
    titulo: 'Safari en Serengeti',
    duracion: 7,
    noches: 6,
    precio: 2500,
    descripcionCorta: 'Sé testigo de la gran migración en el parque más famoso de Tanzania.',
    imagenUrl: 'https://images.unsplash.com/photo-1534476333033-8b560df5f7de'
  },
  {
    id: 2,
    titulo: 'Aventura en Masai Mara',
    duracion: 5,
    noches: 4,
    precio: 1800,
    descripcionCorta: 'Explora la reserva de Kenia, hogar de los "Cinco Grandes".',
    imagenUrl: 'https://images.unsplash.com/photo-1534999432322-1594e7579b76'
  },
  {
    id: 3,
    titulo: 'Gorilas en Ruanda',
    duracion: 4,
    noches: 3,
    precio: 3100,
    descripcionCorta: 'Un encuentro cercano e inolvidable con los gorilas de montaña.',
    imagenUrl: 'https://images.unsplash.com/photo-1593976378120-c7932e60eadb'
  }
])
</script>
