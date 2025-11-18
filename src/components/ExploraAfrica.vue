<template>
  <section id="explora" class="py-20 bg-white overflow-hidden">
    <div class="container mx-auto px-6">
      
      <div class="flex flex-col md:flex-row items-center gap-12 mb-20">
        
        <div class="w-full md:w-1/2 relative">
          <div class="imagen-recortada h-[450px] w-full relative z-10 filter drop-shadow-xl">
            <img 
              src="/africa.jpg" 
              alt="Africa" 
              class="w-full h-full object-cover"
            >
          </div>
        </div>

        <div class="w-full md:w-1/2 text-center md:text-left">
          <h2 class="text-4xl font-marker text-black mb-6 tracking-widest uppercase">
            Explora Africa
          </h2>
          
          <p class="text-gray-700 mb-8 leading-relaxed text-justify">
            Viajar a África es mucho más que un safari: es vivir una conexión con la naturaleza, 
            descubrir culturas ancestrales y sorprenderte con paisajes que no existen en ningún otro lugar. 
            Kenia, la joya del África Oriental, te espera con parques y reservas impresionantes, 
            actividades únicas y una fauna salvaje que te dejará sin aliento.
          </p>

          <router-link 
            to="/reservar" 
            class="inline-block border border-gray-800 text-gray-800 px-12 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-black hover:text-white transition duration-300 uppercase"
          >
            Reservas
          </router-link>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div class="h-64 overflow-hidden rounded-lg shadow-md group">
          <img src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800&auto=format&fit=crop" alt="Globo aerostático" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
        </div>
        <div class="h-64 overflow-hidden rounded-lg shadow-md group">
          <img src="https://images.unsplash.com/photo-1535338454770-8be927b5a00b?q=80&w=800&auto=format&fit=crop" alt="Zebras" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
        </div>
        <div class="h-64 overflow-hidden rounded-lg shadow-md group">
          <img src="https://images.unsplash.com/photo-1605218427368-35b2969964c7?q=80&w=800&auto=format&fit=crop" alt="Safari Jeep" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
        </div>
        <div class="h-64 overflow-hidden rounded-lg shadow-md group">
          <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop" alt="Atardecer Africano" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Importamos la fuente especial */
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

/* Creamos la clase para usarla */
.font-marker {
  font-family: 'Permanent Marker', cursive;
}

.imagen-recortada {
  clip-path: polygon(10% 0, 100% 0, 100% 60%, 75% 100%, 0 100%, 0 40%);
}

@media (min-width: 768px) {
  .imagen-recortada {
    clip-path: polygon(20% 0%, 100% 0, 100% 50%, 80% 100%, 0% 100%, 0 50%);
  }
}
</style>