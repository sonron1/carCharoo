<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header de page -->
    <section class="bg-blue-900 text-white py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Vendez votre véhicule</h1>
        <p class="text-xl opacity-90">Obtenez le meilleur prix pour votre voiture</p>
      </div>
    </section>

    <!-- Process de vente -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Comment ça marche ?</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Remplissez le formulaire</h3>
            <p class="text-gray-600 text-sm">Décrivez votre véhicule avec le maximum de détails</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Envoi par WhatsApp</h3>
            <p class="text-gray-600 text-sm">Les informations sont envoyées directement sur WhatsApp</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Contact rapide</h3>
            <p class="text-gray-600 text-sm">Notre équipe vous contacte dans les plus brefs délais</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">4</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Évaluation & Vente</h3>
            <p class="text-gray-600 text-sm">Inspection gratuite et offre d'achat immédiate</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Formulaire d'estimation -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-gray-50 rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Décrivez votre véhicule</h2>

            <form @submit.prevent="submitEstimation" class="space-y-6">
              <!-- Informations personnelles -->
              <div class="bg-white p-6 rounded-lg border-2 border-blue-100">
                <h3 class="text-lg font-semibold mb-4 text-gray-800">📋 Vos informations</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                    <input v-model="estimation.name" type="text" class="input-field w-full" required>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                    <input v-model="estimation.phone" type="tel" class="input-field w-full" required>
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input v-model="estimation.email" type="email" class="input-field w-full">
                  </div>
                </div>
              </div>

              <!-- Informations véhicule -->
              <div class="bg-white p-6 rounded-lg border-2 border-yellow-100">
                <h3 class="text-lg font-semibold mb-4 text-gray-800">🚗 Informations du véhicule</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Marque *</label>
                    <select v-model="estimation.brand" class="input-field w-full" required>
                      <option value="">Sélectionnez une marque</option>
                      <option v-for="brand in brands" :key="brand" :value="brand">{{ brand }}</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Modèle *</label>
                    <input v-model="estimation.model" type="text" class="input-field w-full" required placeholder="Ex: Camry, Accord, Corolla...">
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Année *</label>
                    <select v-model="estimation.year" class="input-field w-full" required>
                      <option value="">Sélectionnez l'année</option>
                      <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Kilométrage (km) *</label>
                    <input v-model="estimation.mileage" type="number" class="input-field w-full" required placeholder="Ex: 50000">
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Carburant *</label>
                    <select v-model="estimation.fuel" class="input-field w-full" required>
                      <option value="">Sélectionnez le carburant</option>
                      <option value="Essence">Essence</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Hybride">Hybride</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Transmission *</label>
                    <select v-model="estimation.transmission" class="input-field w-full" required>
                      <option value="">Sélectionnez la transmission</option>
                      <option value="Automatique">Automatique</option>
                      <option value="Manuel">Manuel</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Couleur</label>
                    <input v-model="estimation.color" type="text" class="input-field w-full" placeholder="Ex: Blanc, Noir, Rouge...">
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Ville *</label>
                    <select v-model="estimation.location" class="input-field w-full" required>
                      <option value="">Sélectionnez votre ville</option>
                      <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- État du véhicule -->
              <div class="bg-white p-6 rounded-lg border-2 border-green-100">
                <h3 class="text-lg font-semibold mb-4 text-gray-800">🔍 État du véhicule</h3>
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 mb-4">État général *</label>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50" :class="estimation.condition === 'excellent' ? 'border-green-500 bg-green-50' : 'border-gray-200'">
                      <input type="radio" v-model="estimation.condition" value="excellent" class="mr-3">
                      <div>
                        <div class="font-medium">✨ Excellent</div>
                        <div class="text-sm text-gray-600">Comme neuf, aucun défaut</div>
                      </div>
                    </label>

                    <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50" :class="estimation.condition === 'bon' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'">
                      <input type="radio" v-model="estimation.condition" value="bon" class="mr-3">
                      <div>
                        <div class="font-medium">👍 Bon</div>
                        <div class="text-sm text-gray-600">Quelques traces d'usure normales</div>
                      </div>
                    </label>

                    <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50" :class="estimation.condition === 'moyen' ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200'">
                      <input type="radio" v-model="estimation.condition" value="moyen" class="mr-3">
                      <div>
                        <div class="font-medium">⚠️ Moyen</div>
                        <div class="text-sm text-gray-600">Quelques réparations nécessaires</div>
                      </div>
                    </label>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Prix souhaité (FCFA)</label>
                    <input v-model="estimation.expectedPrice" type="number" class="input-field w-full" placeholder="Ex: 5000000">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Disponibilité pour visite</label>
                    <select v-model="estimation.availability" class="input-field w-full">
                      <option value="">Sélectionnez</option>
                      <option value="immediatement">Immédiatement</option>
                      <option value="cette_semaine">Cette semaine</option>
                      <option value="semaine_prochaine">Semaine prochaine</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Commentaires -->
              <div class="bg-white p-6 rounded-lg border-2 border-purple-100">
                <h3 class="text-lg font-semibold mb-4 text-gray-800">💬 Informations complémentaires</h3>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Décrivez votre véhicule</label>
                  <textarea v-model="estimation.comments" rows="5" class="input-field w-full" placeholder="Décrivez l'état de votre véhicule, les équipements, l'historique d'entretien, les réparations récentes, etc."></textarea>
                </div>
              </div>

              <!-- Acceptation conditions -->
              <div class="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg">
                <input type="checkbox" v-model="estimation.acceptTerms" id="terms" class="mt-1">
                <label for="terms" class="text-sm text-gray-700">
                  J'accepte que CarCharoo me contacte concernant la vente de mon véhicule et j'autorise l'envoi de ces informations par WhatsApp pour un traitement rapide.
                </label>
              </div>

              <div class="text-center">
                <UiButton
                    type="submit"
                    :loading="loading"
                    :disabled="!isFormValid"
                    size="lg"
                    class="px-12"
                >
                  {{ loading ? 'Envoi en cours...' : '💬 Envoyer par WhatsApp' }}
                </UiButton>
                <p class="text-sm text-gray-500 mt-2">
                  Vos informations seront envoyées directement sur notre WhatsApp pour un traitement immédiat
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Avantages -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Pourquoi vendre avec CarCharoo ?</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="text-center bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              💰
            </div>
            <h3 class="text-lg font-bold mb-2 text-gray-800">Meilleur prix</h3>
            <p class="text-gray-600 text-sm">Prix justes basés sur l'état réel du véhicule</p>
          </div>

          <div class="text-center bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              ⚡
            </div>
            <h3 class="text-lg font-bold mb-2 text-gray-800">Réponse rapide</h3>
            <p class="text-gray-600 text-sm">Contact immédiat via WhatsApp</p>
          </div>

          <div class="text-center bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🛡️
            </div>
            <h3 class="text-lg font-bold mb-2 text-gray-800">Transaction sécurisée</h3>
            <p class="text-gray-600 text-sm">Paiement garanti et démarches simplifiées</p>
          </div>

          <div class="text-center bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              💬
            </div>
            <h3 class="text-lg font-bold mb-2 text-gray-800">Contact WhatsApp</h3>
            <p class="text-gray-600 text-sm">Communication directe et instantanée</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact rapide -->
    <section class="py-16 bg-blue-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Besoin d'aide ?</h2>
        <p class="text-xl mb-8 opacity-90">Contactez-nous directement sur WhatsApp</p>
        <a
            href="https://wa.me/22967974298?text=Bonjour CarCharoo, je souhaite vendre mon véhicule. Pouvez-vous m'aider ?"
            target="_blank"
            class="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors text-lg"
        >
          <span class="mr-3 text-2xl">💬</span>
          Contacter sur WhatsApp
        </a>
        <p class="text-sm opacity-75 mt-4">+229 67 97 42 98</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const { brands, locations } = useSearch()

const estimation = ref({
  // Informations personnelles
  name: '',
  phone: '',
  email: '',
  // Informations véhicule
  brand: '',
  model: '',
  year: '',
  mileage: '',
  fuel: '',
  transmission: '',
  color: '',
  location: '',
  // État
  condition: '',
  expectedPrice: '',
  availability: '',
  comments: '',
  acceptTerms: false
})

const loading = ref(false)

// Générer les années (des 30 dernières années)
const years = computed(() => {
  const currentYear = new Date().getFullYear()
  const yearsList = []
  for (let i = currentYear; i >= currentYear - 30; i--) {
    yearsList.push(i)
  }
  return yearsList
})

const isFormValid = computed(() => {
  return estimation.value.name &&
      estimation.value.phone &&
      estimation.value.brand &&
      estimation.value.model &&
      estimation.value.year &&
      estimation.value.mileage &&
      estimation.value.fuel &&
      estimation.value.transmission &&
      estimation.value.location &&
      estimation.value.condition &&
      estimation.value.acceptTerms
})

const submitEstimation = async () => {
  if (!isFormValid.value) return

  try {
    loading.value = true

    // Créer le message formaté pour WhatsApp
    const message = `🚗 NOUVELLE DEMANDE DE VENTE - CarCharoo

👤 INFORMATIONS CLIENT:
• Nom: ${estimation.value.name}
• Téléphone: ${estimation.value.phone}
• Email: ${estimation.value.email || 'Non renseigné'}

🚙 VÉHICULE:
• Marque: ${estimation.value.brand}
• Modèle: ${estimation.value.model}
• Année: ${estimation.value.year}
• Kilométrage: ${estimation.value.mileage} km
• Carburant: ${estimation.value.fuel}
• Transmission: ${estimation.value.transmission}
• Couleur: ${estimation.value.color || 'Non renseigné'}
• Localisation: ${estimation.value.location}

🔍 ÉTAT:
• État général: ${estimation.value.condition}
• Prix souhaité: ${estimation.value.expectedPrice ? estimation.value.expectedPrice + ' FCFA' : 'À définir'}
• Disponibilité: ${estimation.value.availability || 'Non renseigné'}

💬 COMMENTAIRES:
${estimation.value.comments || 'Aucun commentaire'}

📅 Date: ${new Date().toLocaleString('fr-FR')}
🌐 Source: Site web CarCharoo`

    // Encoder le message pour URL
    const encodedMessage = encodeURIComponent(message)

    // Ouvrir WhatsApp avec le message
    const whatsappUrl = `https://wa.me/22967974298?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')

    // Simulation d'un délai pour l'UX
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Reset du formulaire
    estimation.value = {
      name: '',
      phone: '',
      email: '',
      brand: '',
      model: '',
      year: '',
      mileage: '',
      fuel: '',
      transmission: '',
      color: '',
      location: '',
      condition: '',
      expectedPrice: '',
      availability: '',
      comments: '',
      acceptTerms: false
    }

    // Message de confirmation
    alert('✅ Vos informations ont été envoyées sur WhatsApp ! Notre équipe va vous contacter rapidement.')

  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    alert('❌ Erreur lors de l\'ouverture de WhatsApp. Veuillez réessayer.')
  } finally {
    loading.value = false
  }
}

// SEO
useSeoMeta({
  title: 'Vendre votre véhicule - CarCharoo',
  description: 'Vendez votre voiture rapidement au meilleur prix avec CarCharoo. Estimation gratuite et contact immédiat via WhatsApp.',
})
</script>