<template>
  <div class="bg-white p-6 rounded-lg shadow-xl">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <select
          v-model="filters.type"
          class="input-field"
          @change="handleFilterChange"
      >
        <option value="">Type de véhicule</option>
        <option
            v-for="type in vehicleTypes"
            :key="type.value"
            :value="type.value"
        >
          {{ type.label }}
        </option>
      </select>

      <select
          v-model="filters.brand"
          class="input-field"
          @change="handleFilterChange"
      >
        <option value="">Marque</option>
        <option
            v-for="brand in brands"
            :key="brand"
            :value="brand"
        >
          {{ brand }}
        </option>
      </select>

      <select
          v-model="filters.maxPrice"
          class="input-field"
          @change="handleFilterChange"
      >
        <option value="">Budget max</option>
        <option
            v-for="price in priceRanges"
            :key="price.value"
            :value="price.value"
        >
          {{ price.label }}
        </option>
      </select>

      <select
          v-model="filters.location"
          class="input-field"
          @change="handleFilterChange"
      >
        <option value="">Localisation</option>
        <option
            v-for="location in locations"
            :key="location"
            :value="location"
        >
          {{ location }}
        </option>
      </select>
    </div>

    <div class="flex justify-between items-center mt-4">
      <button
          v-if="hasActiveFilters"
          @click="clearFilters"
          class="text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        Effacer les filtres
      </button>
      <div class="flex-1"></div>
      <UiButton
          @click="handleSearch"
          :loading="loading"
          class="min-w-[120px]"
      >
        {{ loading ? 'Recherche...' : 'Rechercher' }}
      </UiButton>
    </div>
  </div>
</template>

<script setup>
const { searchFilters, brands, vehicleTypes, priceRanges, locations, resetFilters } = useSearch()
const { searchVehicles, loading } = useVehicles()

const emit = defineEmits(['search'])

const filters = ref({
  type: '',
  brand: '',
  maxPrice: '',
  location: ''
})

const hasActiveFilters = computed(() => {
  return Object.values(filters.value).some(value => value !== '')
})

const handleFilterChange = () => {
  searchFilters.value = { ...filters.value }
}

const handleSearch = async () => {
  await searchVehicles(filters.value)
  emit('search', filters.value)
}

const clearFilters = () => {
  filters.value = {
    type: '',
    brand: '',
    maxPrice: '',
    location: ''
  }
  resetFilters()
  handleSearch()
}
</script>