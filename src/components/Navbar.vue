<template>
  <nav class="bg-white shadow-md p-4 sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-2xl font-bold text-green-800">SafariTours</a>
      
      <div class="hidden md:flex space-x-6">
        <a href="#" class="text-gray-700 hover:text-green-600">Inicio</a>
        <a href="#" class="text-gray-700 hover:text-green-600">Destinos</a>
        <a href="#" class="text-gray-700 hover:text-green-600">Sobre Nosotros</a>
        <a href="#" class="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800">Reservar Ahora</a>
      </div>

      <div class="md:hidden">
        <button class="text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </div>
  </nav>
</template>