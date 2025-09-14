export default defineEventHandler(async (event) => {
    // Simulation d'une base de données
    const mockVehicles = [
        {
            id: 1,
            name: 'Toyota Camry 2020',
            brand: 'Toyota',
            model: 'Camry',
            year: 2020,
            price: '8 500 000',
            image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop',
                'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop',
                'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=500&h=300&fit=crop'
            ],
            mileage: '45 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Cotonou',
            condition: 'occasion',
            type: 'berline',
            description: 'Excellente berline familiale en très bon état. Véhicule régulièrement entretenu avec un historique de maintenance complet. Idéal pour la famille ou les déplacements professionnels. Climatisation, direction assistée, vitres électriques.',
            features: [
                'Climatisation automatique',
                'Direction assistée',
                'Vitres électriques',
                'Radio/CD/Bluetooth',
                'Airbags frontaux',
                'ABS',
                'Jantes alliage',
                'Rétroviseurs électriques'
            ],
            color: 'Blanc',
            doors: 4,
            seats: 5,
            engine: '2.5L',
            createdAt: '2025-01-10T10:00:00Z',
            updatedAt: '2025-01-10T10:00:00Z'
        },
        {
            id: 2,
            name: 'Honda Accord 2019',
            brand: 'Honda',
            model: 'Accord',
            year: 2019,
            price: '7 200 000',
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop',
            mileage: '52 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Porto-Novo',
            condition: 'occasion',
            type: 'berline',
            description: 'Honda Accord en excellent état, véhicule fiable et économique. Parfait pour les longs trajets avec son confort exceptionnel.',
            features: ['Climatisation', 'Direction assistée', 'Vitres électriques', 'Radio/CD'],
            color: 'Gris',
            doors: 4,
            seats: 5,
            engine: '2.0L'
        },
        {
            id: 3,
            name: 'Nissan X-Trail 2021',
            brand: 'Nissan',
            model: 'X-Trail',
            year: 2021,
            price: '12 800 000',
            image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=500&h=300&fit=crop',
            mileage: '28 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Parakou',
            condition: 'occasion',
            type: 'suv',
            description: 'SUV familial spacieux et confortable, parfait pour les familles nombreuses et les aventures.',
            features: ['Climatisation', '7 places', '4x4', 'Toit panoramique'],
            color: 'Noir',
            doors: 5,
            seats: 7,
            engine: '2.5L'
        },
        {
            id: 4,
            name: 'Mercedes C-Class 2022',
            brand: 'Mercedes',
            model: 'C-Class',
            year: 2022,
            price: '18 500 000',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300&fit=crop',
            mileage: '15 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Cotonou',
            condition: 'occasion',
            type: 'berline',
            description: 'Berline de luxe Mercedes-Benz, élégance et performance réunies dans un véhicule d\'exception.',
            features: ['Cuir', 'Navigation', 'Caméra de recul', 'Sièges chauffants'],
            color: 'Bleu',
            doors: 4,
            seats: 5,
            engine: '2.0L Turbo'
        },
        {
            id: 5,
            name: 'BMW X3 2020',
            brand: 'BMW',
            model: 'X3',
            year: 2020,
            price: '16 200 000',
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop',
            mileage: '38 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Cotonou',
            condition: 'occasion',
            type: 'suv',
            description: 'SUV BMW alliant sportivité et praticité, conduite dynamique garantie.',
            features: ['Cuir', 'Toit ouvrant', 'Système audio premium', 'Xdrive'],
            color: 'Blanc',
            doors: 5,
            seats: 5,
            engine: '2.0L Turbo'
        },
        {
            id: 6,
            name: 'Toyota Hilux 2021',
            brand: 'Toyota',
            model: 'Hilux',
            year: 2021,
            price: '14 800 000',
            image: 'https://images.unsplash.com/photo-1563720359-a8b28b8c9e98?w=500&h=300&fit=crop',
            mileage: '22 000',
            fuel: 'Diesel',
            transmission: 'Manuel',
            location: 'Parakou',
            condition: 'occasion',
            type: 'pickup',
            description: 'Pick-up robuste et fiable, parfait pour le travail et les loisirs. 4x4 disponible.',
            features: ['4x4', 'Benne', 'Climatisation', 'Direction assistée'],
            color: 'Rouge',
            doors: 4,
            seats: 5,
            engine: '2.8L Diesel'
        }
    ]

    // Récupération des paramètres de requête
    const query = getQuery(event)
    let filteredVehicles = [...mockVehicles]

    // Filtrage par type
    if (query.type && query.type !== 'all') {
        filteredVehicles = filteredVehicles.filter(v => v.type === query.type)
    }

    // Filtrage par marque
    if (query.brand && query.brand !== 'all') {
        filteredVehicles = filteredVehicles.filter(v =>
            v.brand.toLowerCase() === query.brand.toLowerCase()
        )
    }

    // Filtrage par prix maximum
    if (query.maxPrice) {
        const maxPrice = parseInt(query.maxPrice.toString().replace(/\D/g, ''))
        filteredVehicles = filteredVehicles.filter(v => {
            const price = parseInt(v.price.replace(/\D/g, ''))
            return price <= maxPrice
        })
    }

    // Filtrage par localisation
    if (query.location) {
        filteredVehicles = filteredVehicles.filter(v =>
            v.location.toLowerCase() === query.location.toLowerCase()
        )
    }

    // Filtrage par carburant
    if (query.fuel) {
        filteredVehicles = filteredVehicles.filter(v =>
            v.fuel.toLowerCase() === query.fuel.toLowerCase()
        )
    }

    // Filtrage par transmission
    if (query.transmission) {
        filteredVehicles = filteredVehicles.filter(v =>
            v.transmission.toLowerCase() === query.transmission.toLowerCase()
        )
    }

    // Tri
    if (query.sort) {
        switch (query.sort) {
            case 'price-asc':
                filteredVehicles.sort((a, b) => {
                    const priceA = parseInt(a.price.replace(/\D/g, ''))
                    const priceB = parseInt(b.price.replace(/\D/g, ''))
                    return priceA - priceB
                })
                break
            case 'price-desc':
                filteredVehicles.sort((a, b) => {
                    const priceA = parseInt(a.price.replace(/\D/g, ''))
                    const priceB = parseInt(b.price.replace(/\D/g, ''))
                    return priceB - priceA
                })
                break
            case 'year-desc':
                filteredVehicles.sort((a, b) => b.year - a.year)
                break
            case 'mileage-asc':
                filteredVehicles.sort((a, b) => {
                    const mileageA = parseInt(a.mileage.replace(/\D/g, ''))
                    const mileageB = parseInt(b.mileage.replace(/\D/g, ''))
                    return mileageA - mileageB
                })
                break
            default:
                // Par défaut, tri par date de création (plus récent d'abord)
                filteredVehicles.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
        }
    }

    // Pagination
    const page = parseInt(query.page) || 1
    const limit = parseInt(query.limit) || 10
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit

    const paginatedVehicles = filteredVehicles.slice(startIndex, endIndex)

    // Simulation d'un délai réseau
    await new Promise(resolve => setTimeout(resolve, 500))

    return {
        vehicles: paginatedVehicles,
        pagination: {
            page,
            limit,
            total: filteredVehicles.length,
            totalPages: Math.ceil(filteredVehicles.length / limit),
            hasNext: endIndex < filteredVehicles.length,
            hasPrev: startIndex > 0
        },
        filters: {
            type: query.type || null,
            brand: query.brand || null,
            maxPrice: query.maxPrice || null,
            location: query.location || null,
            fuel: query.fuel || null,
            transmission: query.transmission || null
        }
    }
})