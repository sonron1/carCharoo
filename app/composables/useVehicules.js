export const useVehicles = () => {
    const vehicles = ref([])
    const loading = ref(false)
    const error = ref(null)

    // Données d'exemple avec images d'internet
    const mockVehicles = [
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
            type: 'berline',
            description: 'Excellente berline familiale, très bien entretenue',
            features: ['Climatisation', 'Direction assistée', 'Vitres électriques', 'Radio/CD']
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
            type: 'berline'
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
            type: 'suv'
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
            type: 'berline'
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
            type: 'suv'
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
            type: 'pickup'
        }
    ]

    const fetchVehicles = async () => {
        try {
            loading.value = true
            // Simulation API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            vehicles.value = mockVehicles
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    const getVehicleById = async (id) => {
        try {
            loading.value = true
            // Simulation API call
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

    const searchVehicles = async (filters) => {
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

            vehicles.value = filtered
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
        fetchVehicles,
        getVehicleById,
        searchVehicles
    }
}