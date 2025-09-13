<template>
  <div class="bg-white p-6 rounded-lg shadow-md h-fit sticky top-4">
    <h3 class="text-lg font-semibold mb-4 text-gray-800">Filtres</h3>

    <!-- Type de véhicule -->
    <div class="mb-6">
      <h4 class="font-medium mb-3 text-gray-700">Type</h4>
      <div class="space-y-2">
        <label
            v-for="type in vehicleTypes"
            :key="type.value"
            class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
        >
          <input
              type="radio"
              :value="type.value"
              v-model="localFilters.type"
              class="mr-2 text-blue-600"
              @change="updateFilters"
          >
          <span class="text-sm">{{ type.label }}</span>
        </label>
      </div>
    </div>

    <!-- Marque -->
    <div class="mb-6">
      <h4 class="font-medium mb-3 text-gray-700">Marque</h4>
      <div class="max-h-48 overflow-y-auto space-y-2">
        <label
            v-for="brand in brands"
            :key="brand"
            class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
        >
          <input
              type="radio"
              :value="brand"
              v-model="localFilters.brand"
              class="mr-2 text-blue-600"
              @change="updateFilters"
          >
          <span class="text-sm">{{ brand }}</span>
        </label>
      </div>
    </div>

    <!-- Prix -->
    <div class="mb-6">
      <h4 class="font-medium mb-3 text-gray-700">Prix</h4>
      <div class="space-y-2">
        <label
            v-for="price in priceRanges"
            :key="price.value"
            class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
        >
          <input
              type="radio"
              :value="price.value"
              v-model="localFilters.maxPrice"
              class="mr-2 text-blue-600"
              @change="updateFilters"
          >
          <span class="text-sm">{{ price.label }}</span>
        </label>
      </div>
    </div>

    <!-- Carburant -->
    <div class="mb-6">
      <h4 class="font-medium mb-3 text-gray-700">Carburant</h4>
      <div class="space-y-2">
        <label class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
          <input
              type="radio"
              value="Essence"
              v-model="localFilters.fuel"
              class="mr-2 text-blue-600"
              @change="updateFilters"
          >
          <span class="text-sm">Essence</span>
        </label>
        <label class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
          <input
              type="radio"
              value="Diesel"
              v-model="localFilters.fuel"
              class="mr-2 text-blue-600"
              @change="updateFilters"
          >
          <span class="text-sm">Diesel</span>
        </label>
        <label class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
          <input
              type="radio"
              value="Hybride"
              v-model="localFilters.fuel"
              class="mr-2 text-blue-600"
              @change="updateFilters"
          >
          <span class="text-sm">Hybride</span>
        </label>
      </div>
    </div>

    <!-- Transmission -->
    <div class="mb-6">
      <h4 class="font-medium mb-3 text-gray-700">Transmission</h4>
      <div class="space-y-2">
        <label class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
          <input
              type="radio"
              value="Automatique"
              v-model="localFilters.transmission"
              class="mr-2 text-blue-600"
              @change="updateFilters"
          >
          <span class="text-sm">Automatique</span>
        </label>
        <label class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
          <input
              type="radio"
              value="Manuel"
              v-model="localFilters.transmission"
              class="mr-2 text-blue-600"
              @change="updateFilters"
          >
          <span class="text-sm">Manuel</span>
        </label>
      </div>
    </div>

    <!-- Localisation -->
    <div class="mb-6">
      <h4 class="font-medium mb-3 text-gray-700">Localisation</h4>
      <div class="max-h-48 overflow-y-auto space-y-2">
        <label
            v-for="location in locations"
            :key="location"
            class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
        >
          <input
              type="radio"
              :value="location"
              v-model="localFilters.location"
              class="mr-2 text-blue-600"
              @change="updateFilters"
          >
          <span class="text-sm">{{ location }}</span>
        </label>
      </div>
    </div>

    <!-- Boutons -->
    <div class="space-y-3">
      <UiButton
          variant="primary"
          size="sm"
          class="w-full"
          @click="applyFilters"
      >
        Appliquer les filtres
      </UiButton>
      <UiButton
          variant="outline"
          size="sm"
          class="w-full"
          @click="clearAllFilters"
      >
        Effacer tout
      </UiButton>
    </div>
  </div>
</template>

<script setup>
const { brands, vehicleTypes, priceRanges, locations } = useSearch()
const emit = defineEmits(['filtersChanged'])

const localFilters = ref({
  type: '',
  brand: '',
  maxPrice: '',
  fuel: '',
  transmission: '',
  location: ''
})

const updateFilters = () => {
  emit('filtersChanged', { ...localFilters.value })
}

const applyFilters = () => {
  updateFilters()
}

const clearAllFilters = () => {
  localFilters.value = {
    type: '',
    brand: '',
    maxPrice: '',
    fuel: '',
    transmission: '',
    location: ''
  }
  updateFilters()
}
</script>