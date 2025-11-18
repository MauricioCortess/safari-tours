<template>
  <div id="app" class="bg-gray-50 min-h-screen flex flex-col">
    <Navbar />
    
    <main class="flex-grow">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue' // <--- Importamos el Footer
</script>