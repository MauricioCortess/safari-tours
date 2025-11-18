<template>
  <div class="relative min-h-screen flex items-center justify-center py-10 px-4 bg-yellow-100 overflow-hidden">
    
    <div class="absolute inset-0 z-0"> 
      <img 
        src="/fondo-form.jpg" 
        alt="Fondo del formulario" 
        class="w-full h-full object-cover"
      >
      </div>

    <div class="relative z-10 bg-white p-8 md:p-12 rounded-lg shadow-2xl max-w-2xl w-full border border-gray-200">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-extrabold text-gray-800 mb-2">¡ÁFRICA TE ESPERA!</h2>
        <p class="text-gray-500 text-sm">Rellena el formulario y te contactaremos para diseñar tu aventura.</p>
      </div>

      <form @submit.prevent="submitForm" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">Nombre*</label>
            <input type="text" id="firstName" v-model="form.firstName" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Apellido*</label>
            <input type="text" id="lastName" v-model="form.lastName" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email*</label>
            <input type="email" id="email" v-model="form.email" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Teléfono*</label>
            <input type="tel" id="phone" v-model="form.phone" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
        </div>

        <div>
          <label for="numTravelers" class="block text-sm font-medium text-gray-700 mb-1">¿Cuántas personas desean viajar?*</label>
          <input type="number" id="numTravelers" v-model.number="form.numTravelers" required min="1" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>

        <div>
          <label for="tripDuration" class="block text-sm font-medium text-gray-700 mb-1">¿Cuántos días quieres que dure el viaje?*</label>
          <input type="number" id="tripDuration" v-model.number="form.tripDuration" required min="1" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>

        <div>
          <label for="location" class="block text-sm font-medium text-gray-700 mb-1">País y Estado en el que resides actualmente.</label>
          <input type="text" id="location" v-model="form.location" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>

        <div class="flex flex-col gap-4 pt-6 border-t border-gray-100 mt-6">
          
          <button type="submit"
                  class="w-full bg-blue-600 text-white py-3 px-8 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-md uppercase tracking-wider">
            ENVIAR FORMULARIO
          </button>

          <a href="https://wa.me/529981962797" target="_blank" 
             class="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-8 rounded-md font-semibold text-lg hover:bg-green-600 transition duration-300 shadow-md uppercase tracking-wider">
             <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
             Contactar por WhatsApp
          </a>
        </div>

      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  numTravelers: 1,
  tripDuration: 7,
  location: ''
});

const submitForm = () => {
  console.log('Formulario enviado:', form.value);
  alert('¡Formulario enviado! Pronto nos pondremos en contacto contigo.');
};
</script>