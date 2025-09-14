export const useSearch = () => {
    const searchQuery = ref('')
    const searchFilters = ref({
        type: '',
        brand: '',
        maxPrice: '',
        location: ''
    })

    const brands = [
        'Toyota', 'Honda', 'Nissan', 'Mercedes', 'BMW', 'Audi',
        'Volkswagen', 'Ford', 'Hyundai', 'Kia', 'Mazda', 'Peugeot'
    ]

    const vehicleTypes = [
        { value: 'berline', label: 'Berline' },
        { value: 'suv', label: 'SUV' },
        { value: 'pickup', label: 'Pick-up' },
        { value: 'bus', label: 'Bus' },
        { value: 'moto', label: 'Moto' },
        { value: 'utilitaire', label: 'Utilitaire' }
    ]

    const priceRanges = [
        { value: '2000000', label: 'Moins de 2M FCFA' },
        { value: '5000000', label: '2M - 5M FCFA' },
        { value: '10000000', label: '5M - 10M FCFA' },
        { value: '20000000', label: '10M - 20M FCFA' },
        { value: '99999999', label: 'Plus de 20M FCFA' }
    ]

    const locations = [
        'Cotonou', 'Porto-Novo', 'Parakou', 'Bohicon', 'Kandi',
        'Ouidah', 'Abomey', 'Natitingou', 'Lokossa', 'Dassa-Zoumé'
    ]

    const resetFilters = () => {
        searchFilters.value = {
            type: '',
            brand: '',
            maxPrice: '',
            location: ''
        }
        searchQuery.value = ''
    }

    return {
        searchQuery,
        searchFilters,
        brands,
        vehicleTypes,
        priceRanges,
        locations,
        resetFilters
    }
}