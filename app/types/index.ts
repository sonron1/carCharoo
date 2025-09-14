export interface Vehicle {
    id: number
    name: string
    brand: string
    model: string
    year: number
    price: string
    image: string
    images?: string[]
    mileage: string
    fuel: string
    transmission: string
    location: string
    description?: string
    features?: string[]
    condition: 'neuf' | 'occasion'
    type: 'berline' | 'suv' | 'pickup' | 'bus' | 'moto' | 'utilitaire'
    color?: string
    doors?: number
    seats?: number
    engine?: string
    createdAt?: string
    updatedAt?: string
}

export interface SearchFilters {
    type?: string
    brand?: string
    minPrice?: number
    maxPrice?: number
    minYear?: number
    maxYear?: number
    fuel?: string
    transmission?: string
    location?: string
    condition?: string
}

export interface ContactForm {
    name: string
    email: string
    phone: string
    message: string
    vehicleId?: number
}