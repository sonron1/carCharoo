<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-6">Trouvez votre véhicule idéal au Bénin</h1>
        <p class="text-xl mb-8">CarCharoo - La plateforme de référence pour acheter et vendre des véhicules</p>

        <!-- Search bar -->
        <div class="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select class="px-4 py-3 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-blue-500">
              <option>Type de véhicule</option>
              <option>Berline</option>
              <option>SUV</option>
              <option>Pick-up</option>
              <option>Bus</option>
              <option>Moto</option>
            </select>
            <select class="px-4 py-3 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-blue-500">
              <option>Marque</option>
              <option>Toyota</option>
              <option>Honda</option>
              <option>Nissan</option>
              <option>Mercedes</option>
              <option>BMW</option>
            </select>
            <select class="px-4 py-3 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-blue-500">
              <option>Budget max</option>
              <option>Moins de 2M FCFA</option>
              <option>2M - 5M FCFA</option>
              <option>5M - 10M FCFA</option>
              <option>Plus de 10M FCFA</option>
            </select>
            <button class="bg-yellow-400 text-blue-900 px-6 py-3 rounded font-bold hover:bg-yellow-300 transition-colors">
              Rechercher
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-3xl font-bold text-blue-900 mb-2">500+</div>
            <div class="text-gray-600">Véhicules disponibles</div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-3xl font-bold text-blue-900 mb-2">1000+</div>
            <div class="text-gray-600">Clients satisfaits</div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-3xl font-bold text-blue-900 mb-2">50+</div>
            <div class="text-gray-600">Concessionnaires</div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-3xl font-bold text-blue-900 mb-2">24/7</div>
            <div class="text-gray-600">Support client</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Vehicles -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Véhicules en vedette</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <VehicleCard
              v-for="vehicle in featuredVehicles"
              :key="vehicle.id"
              :vehicle="vehicle"
          />
        </div>
        <div class="text-center mt-12">
          <NuxtLink to="/vehicules" class="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors">
            Voir tous les véhicules
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Nos Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🚗
            </div>
            <h3 class="text-xl font-bold mb-4">Vente de véhicules</h3>
            <p class="text-gray-600">Large choix de véhicules neufs et d'occasion, inspectés et garantis</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🔧
            </div>
            <h3 class="text-xl font-bold mb-4">Service après-vente</h3>
            <p class="text-gray-600">Maintenance et réparation par nos experts qualifiés</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              💳
            </div>
            <h3 class="text-xl font-bold mb-4">Financement</h3>
            <p class="text-gray-600">Solutions de crédit auto adaptées à votre budget</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Données d'exemple pour les véhicules en vedette
const featuredVehicles = ref([
  {
    id: 1,
    name: 'Toyota Camry 2020',
    price: '8 500 000',
    image: '/images/toyota-camry.jpg',
    year: 2020,
    mileage: '45 000',
    fuel: 'Essence',
    transmission: 'Automatique',
    location: 'Cotonou'
  },
  {
    id: 2,
    name: 'Honda Accord 2019',
    price: '7 200 000',
    image: '/images/honda-accord.jpg',
    year: 2019,
    mileage: '52 000',
    fuel: 'Essence',
    transmission: 'Automatique',
    location: 'Porto-Novo'
  },
  {
    id: 3,
    name: 'Nissan X-Trail 2021',
    price: '12 800 000',
    image: '/images/nissan-xtrail.jpg',
    year: 2021,
    mileage: '28 000',
    fuel: 'Essence',
    transmission: 'Automatique',
    location: 'Parakou'
  }
])

// SEO
useSeoMeta({
  title: 'CarCharoo - Vente de Véhicules au Bénin',
  description: 'Trouvez votre véhicule idéal au Bénin avec CarCharoo. Large choix de véhicules neufs et d\'occasion.',
})
</script>