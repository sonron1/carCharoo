<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header de page -->
    <section class="bg-blue-900 text-white py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Contactez-nous</h1>
        <p class="text-xl opacity-90">Nous sommes là pour vous aider</p>
      </div>
    </section>

    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Formulaire de contact -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-800">Envoyez-nous un message</h2>
          <ContactForm />
        </div>

        <!-- Informations de contact -->
        <div class="space-y-8">
          <!-- Coordonnées -->
          <div class="bg-white rounded-lg shadow-md p-8">
            <h3 class="text-xl font-bold mb-6 text-gray-800">Nos coordonnées</h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  📍
                </div>
                <div>
                  <h4 class="font-medium text-gray-800">Adresse</h4>
                  <p class="text-gray-600">123 Rue de la République<br>Cotonou, Bénin</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  📞
                </div>
                <div>
                  <h4 class="font-medium text-gray-800">Téléphone</h4>
                  <p class="text-gray-600">+229 67 97 42 98</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  ✉️
                </div>
                <div>
                  <h4 class="font-medium text-gray-800">Email</h4>
                  <p class="text-gray-600">contact@carcharoo.bj</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  🕒
                </div>
                <div>
                  <h4 class="font-medium text-gray-800">Horaires</h4>
                  <p class="text-gray-600">Lun - Sam: 8h00 - 18h00<br>Dim: Fermé</p>
                </div>
              </div>
            </div>
          </div>

          <!-- WhatsApp -->
          <div class="bg-green-50 border-2 border-green-200 rounded-lg p-8">
            <h3 class="text-xl font-bold mb-4 text-green-800">💬 Contact rapide WhatsApp</h3>
            <p class="text-green-700 mb-6">Pour une réponse immédiate, contactez-nous directement sur WhatsApp !</p>
            <a
                href="https://wa.me/22967974298?text=Bonjour CarCharoo, j'aimerais obtenir des informations sur vos véhicules."
                target="_blank"
                class="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              <span class="mr-2">💬</span>
              Ouvrir WhatsApp
            </a>
            <p class="text-sm text-green-600 mt-2">+229 67 97 42 98</p>
          </div>

          <!-- FAQ rapide -->
          <div class="bg-white rounded-lg shadow-md p-8">
            <h3 class="text-xl font-bold mb-6 text-gray-800">Questions fréquentes</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-medium text-gray-800 mb-2">Comment acheter un véhicule ?</h4>
                <p class="text-sm text-gray-600">Parcourez nos annonces, contactez-nous par WhatsApp (+229 67 97 42 98) et organisez une visite.</p>
              </div>

              <div>
                <h4 class="font-medium text-gray-800 mb-2">Proposez-vous du financement ?</h4>
                <p class="text-sm text-gray-600">Oui, nous travaillons avec plusieurs partenaires financiers pour vous aider.</p>
              </div>

              <div>
                <h4 class="font-medium text-gray-800 mb-2">Les véhicules sont-ils garantis ?</h4>
                <p class="text-sm text-gray-600">Tous nos véhicules sont inspectés et certains bénéficient d'une garantie.</p>
              </div>
            </div>
          </div>

          <!-- Réseaux sociaux -->
          <div class="bg-white rounded-lg shadow-md p-8">
            <h3 class="text-xl font-bold mb-6 text-gray-800">Suivez-nous</h3>
            <div class="flex space-x-4">
              <a href="#" class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                📘
              </a>
              <a href="#" class="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                📷
              </a>
              <a href="#" class="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                🐦
              </a>
              <a href="https://wa.me/22967974298" target="_blank" class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                💬
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO
useSeoMeta({
  title: 'Contact - CarCharoo',
  description: 'Contactez CarCharoo pour toute question sur nos véhicules. WhatsApp : +229 67 97 42 98. Nous sommes là pour vous aider dans votre achat de voiture au Bénin.',
})
</script>