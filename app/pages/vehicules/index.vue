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
              {{ pagination.total }} véhicule{{ pagination.total > 1 ? 's' : '' }} trouvé{{ pagination.total > 1 ? 's' : '' }}
              <span v-if="pagination.total > 0" class="text-sm">
                (Page {{ pagination.page }} sur {{ pagination.totalPages }})
              </span>
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

          <!-- Pagination -->
          <div v-if="vehicles.length > 0 && pagination.totalPages > 1" class="mt-8 flex justify-center">
            <div class="flex items-center space-x-2">
              <!-- Bouton Précédent -->
              <button
                  @click="changePage(pagination.page - 1)"
                  :disabled="!pagination.hasPrev"
                  :class="[
                  'px-3 py-2 border rounded transition-colors',
                  pagination.hasPrev
                    ? 'border-gray-300 hover:bg-gray-50 text-gray-700'
                    : 'border-gray-200 text-gray-400 cursor-not-allowed'
                ]"
              >
                Précédent
              </button>

              <!-- Numéros de pages -->
              <template v-for="page in visiblePages" :key="page">
                <button
                    v-if="page === '...'"
                    class="px-3 py-2 text-gray-400"
                    disabled
                >
                  ...
                </button>
                <button
                    v-else
                    @click="changePage(page)"
                    :class="[
                    'px-3 py-2 border rounded transition-colors',
                    page === pagination.page
                      ? 'bg-blue-900 text-white border-blue-900'
                      : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                  ]"
                >
                  {{ page }}
                </button>
              </template>

              <!-- Bouton Suivant -->
              <button
                  @click="changePage(pagination.page + 1)"
                  :disabled="!pagination.hasNext"
                  :class="[
                  'px-3 py-2 border rounded transition-colors',
                  pagination.hasNext
                    ? 'border-gray-300 hover:bg-gray-50 text-gray-700'
                    : 'border-gray-200 text-gray-400 cursor-not-allowed'
                ]"
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { vehicles, loading, pagination, fetchVehicles, searchVehicles } = useVehicles()
const router = useRouter()

const sortBy = ref('recent')
const currentFilters = ref({})

// Pages visibles pour la pagination
const visiblePages = computed(() => {
  const total = pagination.value.totalPages
  const current = pagination.value.page
  const pages = []

  if (total <= 7) {
    // Afficher toutes les pages si <= 7
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    // Logique pour pagination avec ellipses
    if (current <= 4) {
      pages.push(1, 2, 3, 4, 5, '...', total)
    } else if (current >= total - 3) {
      pages.push(1, '...', total - 4, total - 3, total - 2, total - 1, total)
    } else {
      pages.push(1, '...', current - 1, current, current + 1, '...', total)
    }
  }

  return pages
})

// Charger les véhicules au montage
onMounted(async () => {
  await fetchVehicles(1, 9)
})

const handleSearch = async (filters) => {
  currentFilters.value = filters
  await searchVehicles(filters, 1, 9)
}

const handleFiltersChange = async (filters) => {
  currentFilters.value = { ...currentFilters.value, ...filters }
  await searchVehicles(currentFilters.value, 1, 9)
}

const changePage = async (page) => {
  if (page < 1 || page > pagination.value.totalPages) return

  if (Object.keys(currentFilters.value).length > 0) {
    await searchVehicles(currentFilters.value, page, 9)
  } else {
    await fetchVehicles(page, 9)
  }

  // Scroll vers le haut
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleSort = () => {
  console.log('Tri par:', sortBy.value)
  // TODO: Implémenter le tri
}

const goToVehicle = (id) => {
  router.push(`/vehicules/${id}`)
}

const clearAllFilters = async () => {
  currentFilters.value = {}
  await fetchVehicles(1, 9)
}

// SEO
useSeoMeta({
  title: 'Véhicules - CarCharoo',
  description: 'Découvrez notre large sélection de véhicules d\'occasion et neufs au Bénin.',
})
</script>