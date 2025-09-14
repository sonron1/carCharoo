<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-2xl font-bold text-yellow-400 mb-4">CarCharoo</h3>
          <p class="text-gray-300 mb-4">Votre partenaire de confiance pour l'achat et la vente de véhicules au Bénin.</p>
          <div class="flex space-x-4">
            <a href="#" class="text-yellow-400 hover:text-yellow-300">📘</a>
            <a href="#" class="text-yellow-400 hover:text-yellow-300">📷</a>
            <a href="#" class="text-yellow-400 hover:text-yellow-300">🐦</a>
            <a href="https://wa.me/22967974298" target="_blank" class="text-yellow-400 hover:text-yellow-300">💬</a>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Véhicules</h4>
          <ul class="space-y-2 text-gray-300">
            <li><NuxtLink to="/vehicules" class="hover:text-yellow-400">Voitures neuves</NuxtLink></li>
            <li><NuxtLink to="/vehicules" class="hover:text-yellow-400">Voitures d'occasion</NuxtLink></li>
            <li><NuxtLink to="/vehicules" class="hover:text-yellow-400">Motos</NuxtLink></li>
            <li><NuxtLink to="/vehicules" class="hover:text-yellow-400">Utilitaires</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Services</h4>
          <ul class="space-y-2 text-gray-300">
            <li><NuxtLink to="/services" class="hover:text-yellow-400">Financement</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-yellow-400">Assurance</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-yellow-400">Maintenance</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-yellow-400">Garantie</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <div class="space-y-2 text-gray-300">
            <p>📍 Cotonou, Bénin</p>
            <p>📞 +229 67 97 42 98</p>
            <p>✉️ contact@carcharoo.bj</p>
            <p>🕒 Lun-Sam: 8h-18h</p>
            <a
                href="https://wa.me/22967974298"
                target="_blank"
                class="flex items-center text-green-400 hover:text-green-300 transition-colors"
            >
              <span class="mr-2">💬</span>
              Nous contacter sur WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 CarCharoo. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>