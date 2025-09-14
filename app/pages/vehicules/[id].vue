<template>
  <div v-if="loading" class="min-h-screen">
    <UiLoading :center="true" text="Chargement du véhicule..." />
  </div>

  <div v-else-if="vehicle" class="min-h-screen bg-gray-50">
    <!-- Navigation breadcrumb -->
    <div class="bg-white border-b">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex items-center space-x-2 text-sm text-gray-600">
          <NuxtLink to="/" class="hover:text-blue-600">Accueil</NuxtLink>
          <span>›</span>
          <NuxtLink to="/vehicules" class="hover:text-blue-600">Véhicules</NuxtLink>
          <span>›</span>
          <span class="text-gray-800">{{ vehicle.name }}</span>
        </nav>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Images et infos principales -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Image principale -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                :src="vehicle.image"
                :alt="vehicle.name"
                class="w-full h-96 object-cover"
            >
          </div>

          <!-- Description -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">Description</h2>
            <p class="text-gray-600 leading-relaxed">
              {{ vehicle.description || 'Excellent véhicule en très bon état, régulièrement entretenu et prêt à prendre la route. Idéal pour la famille ou les déplacements professionnels.' }}
            </p>
          </div>

          <!-- Caractéristiques détaillées -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Caractéristiques</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div class="flex justify-between border-b border-gray-200 pb-2">
                  <span class="font-medium text-gray-700">Marque</span>
                  <span class="text-gray-600">{{ vehicle.brand }}</span>
                </div>
                <div class="flex justify-between border-b border-gray-200 pb-2">
                  <span class="font-medium text-gray-700">Modèle</span>
                  <span class="text-gray-600">{{ vehicle.model }}</span>
                </div>
                <div class="flex justify-between border-b border-gray-200 pb-2">
                  <span class="font-medium text-gray-700">Année</span>
                  <span class="text-gray-600">{{ vehicle.year }}</span>
                </div>
                <div class="flex justify-between border-b border-gray-200 pb-2">
                  <span class="font-medium text-gray-700">Kilométrage</span>
                  <span class="text-gray-600">{{ vehicle.mileage }} km</span>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex justify-between border-b border-gray-200 pb-2">
                  <span class="font-medium text-gray-700">Carburant</span>
                  <span class="text-gray-600">{{ vehicle.fuel }}</span>
                </div>
                <div class="flex justify-between border-b border-gray-200 pb-2">
                  <span class="font-medium text-gray-700">Transmission</span>
                  <span class="text-gray-600">{{ vehicle.transmission }}</span>
                </div>
                <div class="flex justify-between border-b border-gray-200 pb-2">
                  <span class="font-medium text-gray-700">État</span>
                  <span class="text-gray-600 capitalize">{{ vehicle.condition }}</span>
                </div>
                <div class="flex justify-between border-b border-gray-200 pb-2">
                  <span class="font-medium text-gray-700">Localisation</span>
                  <span class="text-gray-600">{{ vehicle.location }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Équipements -->
          <div v-if="vehicle.features && vehicle.features.length" class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Équipements</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                  v-for="feature in vehicle.features"
                  :key="feature"
                  class="flex items-center space-x-2"
              >
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar contact -->
        <div class="space-y-6">
          <!-- Prix et actions -->
          <div class="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <div class="text-center mb-6">
              <div class="text-3xl font-bold text-blue-900 mb-2">
                {{ vehicle.price }} FCFA
              </div>
              <div class="text-gray-600">Prix négociable</div>
            </div>

            <div class="space-y-3">
              <UiButton
                  class="w-full"
                  @click="showContactModal = true"
              >
                💬 Contacter le vendeur
              </UiButton>
              <UiButton
                  variant="secondary"
                  class="w-full"
                  @click="callPhone"
              >
                📞 Appeler maintenant
              </UiButton>
              <UiButton
                  variant="outline"
                  class="w-full"
                  @click="shareVehicle"
              >
                🔗 Partager
              </UiButton>
            </div>

            <!-- Infos rapides -->
            <div class="mt-6 pt-6 border-t border-gray-200">
              <div class="space-y-2 text-sm">
                <div class="flex items-center text-gray-600">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                  {{ vehicle.location }}
                </div>
                <div class="flex items-center text-gray-600">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
                  </svg>
                  Publié aujourd'hui
                </div>
              </div>
            </div>
          </div>

          <!-- Sécurité -->
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 class="font-medium text-yellow-800 mb-2">🛡️ Conseils sécurité</h3>
            <ul class="text-sm text-yellow-700 space-y-1">
              <li>• Inspectez le véhicule avant achat</li>
              <li>• Vérifiez les papiers du véhicule</li>
              <li>• Rencontrez le vendeur en personne</li>
              <li>• Ne payez jamais à l'avance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de contact -->
    <UiModal
        v-model="showContactModal"
        title="Contacter le vendeur"
    >
      <ContactForm
          :vehicle-id="vehicle.id"
          :vehicle-name="vehicle.name"
      />
    </UiModal>
  </div>

  <!-- Véhicule non trouvé -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <div class="text-6xl mb-4">❌</div>
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Véhicule non trouvé</h1>
      <p class="text-gray-600 mb-6">Ce véhicule n'existe pas ou a été supprimé.</p>
      <NuxtLink to="/vehicules">
        <UiButton>Retour aux véhicules</UiButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { getVehicleById, loading } = useVehicles()

const vehicle = ref(null)
const showContactModal = ref(false)

// Charger le véhicule
onMounted(async () => {
  const id = route.params.id
  vehicle.value = await getVehicleById(id)
})

const callPhone = () => {
  alert('Appel en cours vers +229 XX XX XX XX')
}

const shareVehicle = () => {
  if (navigator.share) {
    navigator.share({
      title: vehicle.value.name,
      text: `Découvrez ce ${vehicle.value.name} à ${vehicle.value.price} FCFA`,
      url: window.location.href
    })
  } else {
    navigator.clipboard.writeText(window.location.href)
    alert('Lien copié dans le presse-papiers !')
  }
}

// SEO dynamique
watchEffect(() => {
  if (vehicle.value) {
    useSeoMeta({
      title: `${vehicle.value.name} - CarCharoo`,
      description: `${vehicle.value.name} ${vehicle.value.year} à ${vehicle.value.price} FCFA. ${vehicle.value.mileage} km, ${vehicle.value.fuel}, ${vehicle.value.transmission}. Contactez-nous !`,
    })
  }
})
</script>