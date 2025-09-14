<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header de page -->
    <section class="bg-blue-900 text-white py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Nos Services</h1>
        <p class="text-xl opacity-90">Des solutions complètes pour tous vos besoins automobiles</p>
      </div>
    </section>

    <!-- Services principaux -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Vente de véhicules -->
          <div class="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🚗
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Vente de véhicules</h3>
            <p class="text-gray-600 mb-6">Large choix de véhicules neufs et d'occasion, inspectés et certifiés par nos experts.</p>
            <ul class="text-sm text-gray-600 text-left space-y-2 mb-6">
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Véhicules inspectés</li>
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Historique vérifié</li>
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Prix compétitifs</li>
            </ul>
            <NuxtLink to="/vehicules">
              <UiButton class="w-full">Voir les véhicules</UiButton>
            </NuxtLink>
          </div>

          <!-- Financement -->
          <div class="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              💳
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Financement auto</h3>
            <p class="text-gray-600 mb-6">Solutions de crédit adaptées à votre budget avec nos partenaires financiers.</p>
            <ul class="text-sm text-gray-600 text-left space-y-2 mb-6">
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Taux avantageux</li>
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Réponse rapide</li>
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Accompagnement personnalisé</li>
            </ul>
            <UiButton variant="secondary" class="w-full">Faire une demande</UiButton>
          </div>

          <!-- Service après-vente -->
          <div class="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🔧
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Service après-vente</h3>
            <p class="text-gray-600 mb-6">Maintenance et réparation par nos techniciens qualifiés.</p>
            <ul class="text-sm text-gray-600 text-left space-y-2 mb-6">
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Techniciens certifiés</li>
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Pièces d'origine</li>
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Garantie sur travaux</li>
            </ul>
            <UiButton variant="outline" class="w-full">Prendre RDV</UiButton>
          </div>

          <!-- Assurance -->
          <div class="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🛡️
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Assurance auto</h3>
            <p class="text-gray-600 mb-6">Trouvez la meilleure assurance pour votre véhicule avec nos partenaires.</p>
            <ul class="text-sm text-gray-600 text-left space-y-2 mb-6">
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Comparaison de devis</li>
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Couverture complète</li>
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Assistance 24h/24</li>
            </ul>
            <UiButton variant="outline" class="w-full">Obtenir un devis</UiButton>
          </div>

          <!-- Échange/Reprise -->
          <div class="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🔄
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Reprise véhicule</h3>
            <p class="text-gray-600 mb-6">Nous reprenons votre ancien véhicule au meilleur prix.</p>
            <ul class="text-sm text-gray-600 text-left space-y-2 mb-6">
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Évaluation gratuite</li>
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Prix juste</li>
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Démarches simplifiées</li>
            </ul>
            <NuxtLink to="/vendre">
              <UiButton variant="outline" class="w-full">Faire estimer</UiButton>
            </NuxtLink>
          </div>

          <!-- Livraison -->
          <div class="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🚚
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Livraison</h3>
            <p class="text-gray-600 mb-6">Service de livraison de votre véhicule partout au Bénin.</p>
            <ul class="text-sm text-gray-600 text-left space-y-2 mb-6">
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Livraison sécurisée</li>
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Couverture nationale</li>
              <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Suivi en temps réel</li>
            </ul>
            <UiButton variant="outline" class="w-full">En savoir plus</UiButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Process d'achat -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Comment ça marche ?</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Recherchez</h3>
            <p class="text-gray-600 text-sm">Parcourez notre catalogue et trouvez le véhicule idéal</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Contactez</h3>
            <p class="text-gray-600 text-sm">Prenez rendez-vous pour une visite et un essai</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Financement</h3>
            <p class="text-gray-600 text-sm">Choisissez votre solution de financement</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">4</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Récupérez</h3>
            <p class="text-gray-600 text-sm">Signez et repartez avec votre nouveau véhicule</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to action -->
    <section class="py-16 bg-blue-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Prêt à trouver votre véhicule ?</h2>
        <p class="text-xl mb-8 opacity-90">Découvrez notre sélection et bénéficiez de nos services</p>
        <div class="space-x-4">
          <NuxtLink to="/vehicules">
            <UiButton variant="secondary" size="lg">Voir les véhicules</UiButton>
          </NuxtLink>
          <NuxtLink to="/contact">
            <UiButton variant="outline" size="lg" class="text-black border-white hover:bg-white hover:text-blue-900">
              Nous contacter
            </UiButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useSeoMeta({
  title: 'Services - CarCharoo',
  description: 'Découvrez tous nos services : vente de véhicules, financement, assurance, service après-vente et plus encore au Bénin.',
})
</script>