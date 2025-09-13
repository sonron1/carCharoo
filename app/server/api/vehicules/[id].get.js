export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')

    // Simulation d'une base de données
    const mockVehicles = [
        {
            id: 1,
            name: 'Toyota Camry 2020',
            brand: 'Toyota',
            model: 'Camry',
            year: 2020,
            price: '8 500 000',
            image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop'
            ],
            mileage: '45 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Cotonou',
            condition: 'occasion',
            type: 'berline',
            description: 'Excellente berline familiale en très bon état. Véhicule régulièrement entretenu avec un historique de maintenance complet disponible. Idéal pour la famille ou les déplacements professionnels. Cette Toyota Camry 2020 offre un parfait équilibre entre confort, fiabilité et économie de carburant. Intérieur spacieux et bien équipé.',
            features: [
                'Climatisation automatique bi-zone',
                'Direction assistée électrique',
                'Vitres électriques avant et arrière',
                'Radio/CD/Bluetooth avec écran tactile',
                'Airbags frontaux et latéraux',
                'Système ABS avec répartiteur de freinage',
                'Jantes alliage 17 pouces',
                'Rétroviseurs électriques et chauffants',
                'Sièges en tissu premium',
                'Éclairage LED',
                'Caméra de recul',
                'Régulateur de vitesse'
            ],
            color: 'Blanc Nacré',
            doors: 4,
            seats: 5,
            engine: '2.5L VVT-i',
            fuelConsumption: '7.2L/100km',
            power: '203 ch',
            acceleration: '8.4s (0-100 km/h)',
            maxSpeed: '210 km/h',
            warranty: '6 mois',
            lastService: '2024-12-15',
            nextService: '2025-06-15',
            vehicleId: 'TYT-CAM-2020-001',
            createdAt: '2025-01-10T10:00:00Z',
            updatedAt: '2025-01-10T10:00:00Z',
            seller: {
                name: 'CarCharoo Cotonou',
                phone: '+229 XX XX XX XX',
                email: 'cotonou@carcharoo.bj',
                address: '123 Rue de la République, Cotonou'
            }
        },
        {
            id: 2,
            name: 'Honda Accord 2019',
            brand: 'Honda',
            model: 'Accord',
            year: 2019,
            price: '7 200 000',
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
            mileage: '52 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Porto-Novo',
            condition: 'occasion',
            type: 'berline',
            description: 'Honda Accord 2019 en excellent état. Véhicule fiable et économique, parfait pour les longs trajets avec son confort exceptionnel. Entretien régulier chez Honda, carnet d\'entretien disponible.',
            features: [
                'Climatisation automatique',
                'Direction assistée',
                'Vitres électriques',
                'Radio/CD avec Bluetooth',
                'Airbags multiples',
                'ABS + EBD',
                'Jantes alliage',
                'Sièges en tissu'
            ],
            color: 'Gris Métallisé',
            doors: 4,
            seats: 5,
            engine: '2.0L VTEC'
        },
        {
            id: 3,
            name: 'Nissan X-Trail 2021',
            brand: 'Nissan',
            model: 'X-Trail',
            year: 2021,
            price: '12 800 000',
            image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop',
            mileage: '28 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Parakou',
            condition: 'occasion',
            type: 'suv',
            description: 'SUV familial spacieux et confortable, parfait pour les familles nombreuses et les aventures. Configuration 7 places avec la flexibilité de moduler l\'espace selon vos besoins.',
            features: [
                'Climatisation tri-zone',
                'Configuration 7 places',
                'Transmission intégrale (4x4)',
                'Toit panoramique',
                'Navigation GPS',
                'Caméra 360°',
                'Sièges en cuir',
                'Démarrage sans clé'
            ],
            color: 'Noir Diamant',
            doors: 5,
            seats: 7,
            engine: '2.5L'
        }
    ]

    // Recherche du véhicule par ID
    const vehicle = mockVehicles.find(v => v.id === parseInt(id))

    if (!vehicle) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Véhicule non trouvé'
        })
    }

    // Simulation d'un délai réseau
    await new Promise(resolve => setTimeout(resolve, 300))

    // Véhicules similaires (même marque ou même type)
    const similarVehicles = mockVehicles
        .filter(v => v.id !== vehicle.id && (v.brand === vehicle.brand || v.type === vehicle.type))
        .slice(0, 3)

    return {
        vehicle,
        similarVehicles,
        meta: {
            views: Math.floor(Math.random() * 1000) + 100,
            favorites: Math.floor(Math.random() * 50) + 10,
            lastUpdated: vehicle.updatedAt
        }
    }
})