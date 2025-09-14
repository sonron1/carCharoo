export const useVehicles = () => {
    const vehicles = ref([])
    const loading = ref(false)
    const error = ref(null)
    const pagination = ref({
        page: 1,
        limit: 9,
        total: 0,
        totalPages: 0,
        hasNext: false,
        hasPrev: false
    })

    // Base de données étendue avec plus de véhicules anciens
    const mockVehicles = [
        // Toyota
        {
            id: 1,
            name: 'Toyota Camry 2020',
            brand: 'Toyota',
            model: 'Camry',
            year: 2020,
            price: '8 500 000',
            image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop',
            mileage: '45 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Cotonou',
            condition: 'occasion',
            type: 'berline'
        },
        {
            id: 2,
            name: 'Toyota Corolla 2015',
            brand: 'Toyota',
            model: 'Corolla',
            year: 2015,
            price: '4 200 000',
            image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=300&fit=crop',
            mileage: '78 000',
            fuel: 'Essence',
            transmission: 'Manuel',
            location: 'Cotonou',
            condition: 'occasion',
            type: 'berline'
        },
        {
            id: 3,
            name: 'Toyota RAV4 2012',
            brand: 'Toyota',
            model: 'RAV4',
            year: 2012,
            price: '5 800 000',
            image: 'https://images.unsplash.com/photo-1570050422553-d0b3f7a8b28b?w=500&h=300&fit=crop',
            mileage: '95 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Porto-Novo',
            condition: 'occasion',
            type: 'suv'
        },
        {
            id: 4,
            name: 'Toyota Hilux 2010',
            brand: 'Toyota',
            model: 'Hilux',
            year: 2010,
            price: '6 500 000',
            image: 'https://images.unsplash.com/photo-1563720359-a8b28b8c9e98?w=500&h=300&fit=crop',
            mileage: '120 000',
            fuel: 'Diesel',
            transmission: 'Manuel',
            location: 'Parakou',
            condition: 'occasion',
            type: 'pickup'
        },
        {
            id: 5,
            name: 'Toyota Yaris 2008',
            brand: 'Toyota',
            model: 'Yaris',
            year: 2008,
            price: '2 800 000',
            image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop',
            mileage: '145 000',
            fuel: 'Essence',
            transmission: 'Manuel',
            location: 'Cotonou',
            condition: 'occasion',
            type: 'berline'
        },
        // Honda
        {
            id: 6,
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
            type: 'berline'
        },
        {
            id: 7,
            name: 'Honda Civic 2014',
            brand: 'Honda',
            model: 'Civic',
            year: 2014,
            price: '3 900 000',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&h=300&fit=crop',
            mileage: '88 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Cotonou',
            condition: 'occasion',
            type: 'berline'
        },
        {
            id: 8,
            name: 'Honda CR-V 2011',
            brand: 'Honda',
            model: 'CR-V',
            year: 2011,
            price: '4 800 000',
            image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop',
            mileage: '110 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Bohicon',
            condition: 'occasion',
            type: 'suv'
        },
        {
            id: 9,
            name: 'Honda Pilot 2009',
            brand: 'Honda',
            model: 'Pilot',
            year: 2009,
            price: '5 200 000',
            image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=500&h=300&fit=crop',
            mileage: '135 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Parakou',
            condition: 'occasion',
            type: 'suv'
        },
        // Nissan
        {
            id: 10,
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
            type: 'suv'
        },
        {
            id: 11,
            name: 'Nissan Altima 2016',
            brand: 'Nissan',
            model: 'Altima',
            year: 2016,
            price: '4 500 000',
            image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&h=300&fit=crop',
            mileage: '72 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Cotonou',
            condition: 'occasion',
            type: 'berline'
        },
        {
            id: 12,
            name: 'Nissan Sentra 2013',
            brand: 'Nissan',
            model: 'Sentra',
            year: 2013,
            price: '3 200 000',
            image: 'https://images.unsplash.com/photo-1494976688153-c895d32d49b1?w=500&h=300&fit=crop',
            mileage: '95 000',
            fuel: 'Essence',
            transmission: 'Manuel',
            location: 'Porto-Novo',
            condition: 'occasion',
            type: 'berline'
        },
        {
            id: 13,
            name: 'Nissan Pathfinder 2008',
            brand: 'Nissan',
            model: 'Pathfinder',
            year: 2008,
            price: '4 900 000',
            image: 'https://images.unsplash.com/photo-1551830820-330a71b594c8?w=500&h=300&fit=crop',
            mileage: '165 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Parakou',
            condition: 'occasion',
            type: 'suv'
        },
        // Mercedes
        {
            id: 14,
            name: 'Mercedes C-Class 2018',
            brand: 'Mercedes',
            model: 'C-Class',
            year: 2018,
            price: '15 500 000',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300&fit=crop',
            mileage: '45 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Cotonou',
            condition: 'occasion',
            type: 'berline'
        },
        {
            id: 15,
            name: 'Mercedes E-Class 2014',
            brand: 'Mercedes',
            model: 'E-Class',
            year: 2014,
            price: '12 800 000',
            image: 'https://images.unsplash.com/photo-1563720359-a8b28b8c9e98?w=500&h=300&fit=crop',
            mileage: '68 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Cotonou',
            condition: 'occasion',
            type: 'berline'
        },
        {
            id: 16,
            name: 'Mercedes ML350 2010',
            brand: 'Mercedes',
            model: 'ML350',
            year: 2010,
            price: '9 800 000',
            image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop',
            mileage: '125 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Porto-Novo',
            condition: 'occasion',
            type: 'suv'
        },
        // BMW
        {
            id: 17,
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
            type: 'suv'
        },
        {
            id: 18,
            name: 'BMW Serie 3 2015',
            brand: 'BMW',
            model: 'Serie 3',
            year: 2015,
            price: '8 500 000',
            image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&h=300&fit=crop',
            mileage: '75 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Cotonou',
            condition: 'occasion',
            type: 'berline'
        },
        {
            id: 19,
            name: 'BMW X5 2012',
            brand: 'BMW',
            model: 'X5',
            year: 2012,
            price: '11 200 000',
            image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=500&h=300&fit=crop',
            mileage: '98 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Porto-Novo',
            condition: 'occasion',
            type: 'suv'
        },
        // Hyundai
        {
            id: 20,
            name: 'Hyundai Elantra 2017',
            brand: 'Hyundai',
            model: 'Elantra',
            year: 2017,
            price: '4 800 000',
            image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&h=300&fit=crop',
            mileage: '62 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Bohicon',
            condition: 'occasion',
            type: 'berline'
        },
        {
            id: 21,
            name: 'Hyundai Tucson 2014',
            brand: 'Hyundai',
            model: 'Tucson',
            year: 2014,
            price: '5 500 000',
            image: 'https://images.unsplash.com/photo-1570050422553-d0b3f7a8b28b?w=500&h=300&fit=crop',
            mileage: '85 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Parakou',
            condition: 'occasion',
            type: 'suv'
        },
        {
            id: 22,
            name: 'Hyundai Accent 2011',
            brand: 'Hyundai',
            model: 'Accent',
            year: 2011,
            price: '2 900 000',
            image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop',
            mileage: '118 000',
            fuel: 'Essence',
            transmission: 'Manuel',
            location: 'Cotonou',
            condition: 'occasion',
            type: 'berline'
        },
        // Kia
        {
            id: 23,
            name: 'Kia Optima 2016',
            brand: 'Kia',
            model: 'Optima',
            year: 2016,
            price: '5 200 000',
            image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=300&fit=crop',
            mileage: '70 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Porto-Novo',
            condition: 'occasion',
            type: 'berline'
        },
        {
            id: 24,
            name: 'Kia Sorento 2013',
            brand: 'Kia',
            model: 'Sorento',
            year: 2013,
            price: '6 800 000',
            image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop',
            mileage: '92 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Bohicon',
            condition: 'occasion',
            type: 'suv'
        },
        // Ford
        {
            id: 25,
            name: 'Ford Focus 2015',
            brand: 'Ford',
            model: 'Focus',
            year: 2015,
            price: '3 800 000',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&h=300&fit=crop',
            mileage: '82 000',
            fuel: 'Essence',
            transmission: 'Manuel',
            location: 'Cotonou',
            condition: 'occasion',
            type: 'berline'
        },
        {
            id: 26,
            name: 'Ford Explorer 2009',
            brand: 'Ford',
            model: 'Explorer',
            year: 2009,
            price: '5 900 000',
            image: 'https://images.unsplash.com/photo-1551830820-330a71b594c8?w=500&h=300&fit=crop',
            mileage: '152 000',
            fuel: 'Essence',
            transmission: 'Automatique',
            location: 'Parakou',
            condition: 'occasion',
            type: 'suv'
        },
        // Peugeot
        {
            id: 27,
            name: 'Peugeot 508 2014',
            brand: 'Peugeot',
            model: '508',
            year: 2014,
            price: '4 200 000',
            image: 'https://images.unsplash.com/photo-1494976688153-c895d32d49b1?w=500&h=300&fit=crop',
            mileage: '78 000',
            fuel: 'Diesel',
            transmission: 'Manuel',
            location: 'Porto-Novo',
            condition: 'occasion',
            type: 'berline'
        },
        {
            id: 28,
            name: 'Peugeot 307 2008',
            brand: 'Peugeot',
            model: '307',
            year: 2008,
            price: '2 500 000',
            image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop',
            mileage: '158 000',
            fuel: 'Essence',
            transmission: 'Manuel',
            location: 'Bohicon',
            condition: 'occasion',
            type: 'berline'
        }
    ]

    const fetchVehicles = async (page = 1, limit = 9) => {
        try {
            loading.value = true
            await new Promise(resolve => setTimeout(resolve, 1000))

            const startIndex = (page - 1) * limit
            const endIndex = startIndex + limit
            const paginatedVehicles = mockVehicles.slice(startIndex, endIndex)

            vehicles.value = paginatedVehicles
            pagination.value = {
                page,
                limit,
                total: mockVehicles.length,
                totalPages: Math.ceil(mockVehicles.length / limit),
                hasNext: endIndex < mockVehicles.length,
                hasPrev: startIndex > 0
            }
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    const getVehicleById = async (id) => {
        try {
            loading.value = true
            await new Promise(resolve => setTimeout(resolve, 500))
            const vehicle = mockVehicles.find(v => v.id === parseInt(id))
            return vehicle
        } catch (err) {
            error.value = err.message
            return null
        } finally {
            loading.value = false
        }
    }

    const searchVehicles = async (filters, page = 1, limit = 9) => {
        try {
            loading.value = true
            await new Promise(resolve => setTimeout(resolve, 800))

            let filtered = [...mockVehicles]

            if (filters.type && filters.type !== 'all') {
                filtered = filtered.filter(v => v.type === filters.type)
            }

            if (filters.brand && filters.brand !== 'all') {
                filtered = filtered.filter(v => v.brand.toLowerCase() === filters.brand.toLowerCase())
            }

            if (filters.maxPrice) {
                const maxPrice = parseInt(filters.maxPrice.replace(/\D/g, ''))
                filtered = filtered.filter(v => {
                    const price = parseInt(v.price.replace(/\D/g, ''))
                    return price <= maxPrice
                })
            }

            if (filters.fuel) {
                filtered = filtered.filter(v => v.fuel === filters.fuel)
            }

            if (filters.transmission) {
                filtered = filtered.filter(v => v.transmission === filters.transmission)
            }

            if (filters.location) {
                filtered = filtered.filter(v => v.location === filters.location)
            }

            // Pagination des résultats filtrés
            const startIndex = (page - 1) * limit
            const endIndex = startIndex + limit
            const paginatedResults = filtered.slice(startIndex, endIndex)

            vehicles.value = paginatedResults
            pagination.value = {
                page,
                limit,
                total: filtered.length,
                totalPages: Math.ceil(filtered.length / limit),
                hasNext: endIndex < filtered.length,
                hasPrev: startIndex > 0
            }
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    return {
        vehicles: readonly(vehicles),
        loading: readonly(loading),
        error: readonly(error),
        pagination: readonly(pagination),
        fetchVehicles,
        getVehicleById,
        searchVehicles
    }
}