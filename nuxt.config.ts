import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
            title: 'CarCharoo - Vente de Véhicules au Bénin',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Trouvez votre véhicule idéal au Bénin avec CarCharoo' }
            ]
        }
    },
    vite: {
        server: {
            fs: {
                allow: [
                    // Autoriser l'accès au répertoire racine du projet
                    resolve('..'),
                    // Autoriser l'accès aux node_modules
                    resolve('../node_modules'),
                    // Autoriser l'accès au répertoire courant
                    resolve('.')
                ]
            }
        }
    }
})