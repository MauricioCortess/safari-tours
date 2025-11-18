<template>
  <section class="py-20 bg-white overflow-hidden">
    <div class="container mx-auto px-6">
      
      <div class="text-center mb-12 relative z-10">
        <div class="flex justify-center gap-2 mb-4">
          <svg v-for="i in 5" :key="i" class="w-8 h-8 text-yellow-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>
        
        <h2 class="text-5xl md:text-6xl text-black mb-4 font-marker">
          TU PRIMER SAFARI
        </h2>
        
        <p class="text-lg md:text-xl font-bold text-gray-800">
          Explora África con seguridad, guía en español y todo resuelto desde el día uno.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-12">
        
        <div class="w-full lg:w-1/2 text-justify text-gray-700 leading-relaxed space-y-6">
          <p>
            Realizar un safari en África es una de esas experiencias únicas que se viven quizás una en la vida. 
            <strong class="text-black border-b-2 border-yellow-400">Kenia</strong> es uno de los destinos de safaris más visitados.
          </p>
          <p>
            El país te ofrece la oportunidad de visitar más de 50 parques nacionales. Además de unas de las mejores playas del mundo como Diani Beach.
          </p>
          <p>
            Todos los parques y las reservas están equipados con todo lo que necesitas: rica comida, estancias cómodas, internet entre otras amenidades.
          </p>
        </div>

        <div class="w-full lg:w-1/2 h-[400px] md:h-[500px]">
          
          <div 
            class="w-full h-full safari-shape shadow-2xl"
            style="
              background-image: url('jeep.jpg'); 
              background-size: cover;
              background-position: center;
              background-color: #4b5563;
            "
          ></div>
          
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

.font-marker {
  font-family: 'Permanent Marker', cursive;
}

.safari-shape {
  clip-path: polygon(
    10% 15%,   
    30% 0%,    
    50% 10%,   
    70% 0%,    
    90% 15%,   
    100% 100%, 
    0% 100%    
  );
}
</style>