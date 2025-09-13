<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header de page -->
    <section class="bg-blue-900 text-white py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Nos Véhicules</h1>
        <p class="text-xl opacity-90">Découvrez notre large sélection de véhicules</p>
      </div>
    </section>

    <!-- Barre de recherche -->
    <section class="py-8 bg-white border-b">
      <div class="container mx-auto px-4">
        <SearchBar @search="handleSearch" />
      </div>
    </section>

    <!-- Contenu principal -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar des filtres -->
        <div class="lg:w-1/4">
          <FilterSidebar @filters-changed="handleFiltersChange" />
        </div>

        <!-- Liste des véhicules -->
        <div class="lg:w-3/4">
          <!-- Résultats header -->
          <div class="flex justify-between items-center mb-6">
            <p class="text-gray-600">
              {{ vehiclesCount }} véhicule{{ vehiclesCount > 1 ? 's' : '' }} trouvé{{ vehiclesCount > 1 ? 's' : '' }}
            </p>
            <select
                v-model="sortBy"
                class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                @change="handleSort"
            >
              <option value="recent">Plus récent</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="year-desc">Année décroissante</option>
              <option value="mileage-asc">Kilométrage croissant</option>
            </select>
          </div>

          <!-- Loading -->
          <UiLoading v-if="loading" :center="true" text="Chargement des véhicules..." />

          <!-- Liste des véhicules -->
          <div v-else-if="vehicles.length" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <VehicleCard
                v-for="vehicle in vehicles"
                :key="vehicle.id"
                :vehicle="vehicle"
                @click="goToVehicle(vehicle.id)"
            />
          </div>

          <!-- Aucun résultat -->
          <div v-else class="text-center py-12">
            <div class="text-6xl mb-4">🚗</div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Aucun véhicule trouvé</h3>
            <p class="text-gray-600 mb-4">Essayez de modifier vos critères de recherche</p>
            <UiButton variant="outline" @click="clearAllFilters">
              Effacer tous les filtres
            </UiButton>
          </div>

          <!-- Pagination (pour plus tard) -->
          <div v-if="vehicles.length > 0" class="mt-8 flex justify-center">
            <div class="flex space-x-2">
              <button class="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">Précédent</button>
              <button class="px-3 py-2 bg-blue-900 text-white rounded">1</button>
              <button class="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">2</button>
              <button class="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">3</button>
              <button class="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">Suivant</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { vehicles, loading, fetchVehicles, searchVehicles } = useVehicles()
const router = useRouter()

const sortBy = ref('recent')
const currentFilters = ref({})

const vehiclesCount = computed(() => vehicles.value?.length || 0)

// Charger les véhicules au montage
onMounted(async () => {
  await fetchVehicles()
})

const handleSearch = async (filters) => {
  currentFilters.value = filters
  await searchVehicles(filters)
}

const handleFiltersChange = async (filters) => {
  currentFilters.value = { ...currentFilters.value, ...filters }
  await searchVehicles(currentFilters.value)
}

const handleSort = () => {
  // Implémentation du tri (à développer)
  console.log('Tri par:', sortBy.value)
}

const goToVehicle = (id) => {
  router.push(`/vehicules/${id}`)
}

const clearAllFilters = async () => {
  currentFilters.value = {}
  await fetchVehicles()
}

// SEO
useSeoMeta({
  title: 'Véhicules - CarCharoo',
  description: 'Découvrez notre large sélection de véhicules d\'occasion et neufs au Bénin.',
})
</script>