<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="relative">
      <img
          :src="vehicle.image || '/images/placeholder-car.jpg'"
          :alt="vehicle.name"
          class="w-full h-48 object-cover"
      >
      <div class="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
        {{ vehicle.price }} FCFA
      </div>
    </div>

    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 text-gray-800">{{ vehicle.name }}</h3>

      <div class="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
          </svg>
          {{ vehicle.year }}
        </div>
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          {{ vehicle.mileage }} km
        </div>
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"/>
          </svg>
          {{ vehicle.fuel }}
        </div>
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
          </svg>
          {{ vehicle.transmission }}
        </div>
      </div>

      <div class="flex items-center text-sm text-gray-500 mb-4">
        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
        </svg>
        {{ vehicle.location }}
      </div>

      <div class="flex space-x-2">
        <button class="flex-1 bg-blue-900 text-white py-2 px-4 rounded font-medium hover:bg-blue-800 transition-colors">
          Voir détails
        </button>
        <button class="flex-1 bg-yellow-400 text-blue-900 py-2 px-4 rounded font-medium hover:bg-yellow-300 transition-colors">
          Contacter
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  vehicle: {
    type: Object,
    required: true
  }
})
</script>