<template>
  <header class="bg-blue-900 text-white shadow-lg">
    <!-- Top bar avec infos contact -->
    <div class="bg-blue-800 py-2">
      <div class="container mx-auto px-4 flex justify-between items-center text-sm">
        <div class="flex items-center space-x-4">
          <span class="flex items-center">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            contact@carcharoo.bj
          </span>
          <span class="flex items-center">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            +229 XX XX XX XX
          </span>
        </div>
        <div class="hidden md:flex items-center space-x-4">
          <span>🇧🇯 Cotonou, Bénin</span>
        </div>
      </div>
    </div>

    <!-- Main header -->
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <h1 class="text-3xl font-bold text-yellow-400">CarCharoo</h1>
          <span class="ml-2 text-sm bg-yellow-400 text-blue-900 px-2 py-1 rounded">Bénin</span>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-6">
          <NuxtLink to="/" class="hover:text-yellow-400 transition-colors">Accueil</NuxtLink>
          <NuxtLink to="/vehicules" class="hover:text-yellow-400 transition-colors">Véhicules</NuxtLink>
          <NuxtLink to="/services" class="hover:text-yellow-400 transition-colors">Services</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-yellow-400 transition-colors">Contact</NuxtLink>
        </nav>

        <!-- Search and buttons -->
        <div class="flex items-center space-x-3">
          <button class="bg-yellow-400 text-blue-900 px-4 py-2 rounded font-medium hover:bg-yellow-300 transition-colors">
            Vendre mon véhicule
          </button>
        </div>
      </div>
    </div>
  </header>
</template>