<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header de page -->
    <section class="bg-blue-900 text-white py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">À propos de CarCharoo</h1>
        <p class="text-xl opacity-90">Votre partenaire automobile de confiance au Bénin</p>
      </div>
    </section>

    <!-- Notre histoire -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Notre Histoire</h2>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Fondée en 2020, CarCharoo est née de la passion automobile et de la volonté de révolutionner le marché de l'automobile au Bénin. Notre mission est simple : faciliter l'achat et la vente de véhicules tout en offrant une expérience client exceptionnelle.
            </p>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Depuis nos débuts, nous avons aidé plus de 1000 familles béninoises à trouver le véhicule de leurs rêves. Nous continuons d'innover pour vous offrir le meilleur service possible.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div>
                <div class="text-2xl font-bold text-blue-900">1000+</div>
                <div class="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-blue-900">500+</div>
                <div class="text-sm text-gray-600">Véhicules vendus</div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md p-8">
            <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format"
                alt="Équipe CarCharoo"
                class="w-full h-64 object-cover rounded-lg mb-4"
            >
            <p class="text-center text-gray-600 italic">Notre équipe passionnée à votre service</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos valeurs -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Nos Valeurs</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🤝
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Confiance</h3>
            <p class="text-gray-600">Nous privilégions la transparence et l'honnêteté dans toutes nos relations clients.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              ⭐
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Excellence</h3>
            <p class="text-gray-600">Nous nous efforçons d'offrir la meilleure qualité de service et de produits.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🚀
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Innovation</h3>
            <p class="text-gray-600">Nous utilisons les dernières technologies pour améliorer votre expérience.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre équipe -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Notre Équipe</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format"
                alt="Directeur"
                class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-lg font-bold mb-2 text-gray-800">Jean-Baptiste AHOUNTO</h3>
            <p class="text-blue-600 mb-2">Directeur Général</p>
            <p class="text-gray-600 text-sm">Expert automobile avec 15 ans d'expérience dans le secteur.</p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <img
                src="https://images.unsplash.com/photo-1494790108755-2616b60fcfe1?w=200&h=200&fit=crop&auto=format"
                alt="Responsable ventes"
                class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-lg font-bold mb-2 text-gray-800">Marie KOUDJO</h3>
            <p class="text-blue-600 mb-2">Responsable des Ventes</p>
            <p class="text-gray-600 text-sm">Spécialiste en conseil client et solutions de financement.</p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format"
                alt="Chef mécanicien"
                class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-lg font-bold mb-2 text-gray-800">Serge TCHAKOUNTÉ</h3>
            <p class="text-blue-600 mb-2">Chef Mécanicien</p>
            <p class="text-gray-600 text-sm">Expert technique certifié, garant de la qualité de nos véhicules.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi nous choisir -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Pourquoi choisir CarCharoo ?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl mb-4">🔍</div>
            <h3 class="font-bold mb-2">Véhicules inspectés</h3>
            <p class="text-gray-600 text-sm">Contrôle qualité rigoureux sur tous nos véhicules</p>
          </div>

          <div class="text-center">
            <div class="text-4xl mb-4">💰</div>
            <h3 class="font-bold mb-2">Prix transparents</h3>
            <p class="text-gray-600 text-sm">Pas de frais cachés, prix justes et négociables</p>
          </div>

          <div class="text-center">
            <div class="text-4xl mb-4">🛡️</div>
            <h3 class="font-bold mb-2">Garantie incluse</h3>
            <p class="text-gray-600 text-sm">Protection sur vos achats avec notre garantie</p>
          </div>

          <div class="text-center">
            <div class="text-4xl mb-4">🤝</div>
            <h3 class="font-bold mb-2">Service client</h3>
            <p class="text-gray-600 text-sm">Accompagnement personnalisé avant, pendant et après</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to action -->
    <section class="py-16 bg-blue-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Rejoignez la famille CarCharoo</h2>
        <p class="text-xl mb-8 opacity-90">Découvrez pourquoi plus de 1000 clients nous font confiance</p>
        <div class="space-x-4">
          <NuxtLink to="/vehicules">
            <UiButton variant="secondary" size="lg">Voir nos véhicules</UiButton>
          </NuxtLink>
          <NuxtLink to="/contact">
            <UiButton variant="outline" size="lg" class="text-white border-white hover:bg-white hover:text-blue-900">
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
  title: 'À propos - CarCharoo',
  description: 'Découvrez l\'histoire de CarCharoo, votre partenaire automobile de confiance au Bénin. Notre équipe, nos valeurs et notre mission.',
})
</script>