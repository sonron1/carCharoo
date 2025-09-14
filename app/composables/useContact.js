
export const useContact = () => {
    const loading = ref(false)
    const success = ref(false)
    const error = ref('')

    const sendMessage = async (formData) => {
        try {
            loading.value = true
            error.value = ''

            // Validation simple
            if (!formData.name || !formData.email || !formData.message) {
                throw new Error('Tous les champs obligatoires doivent être remplis')
            }

            // Simulation d'envoi API
            await new Promise(resolve => setTimeout(resolve, 1500))

            success.value = true

            // Reset après 3 secondes
            setTimeout(() => {
                success.value = false
            }, 3000)

        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    const sendVehicleInquiry = async (vehicleId, formData) => {
        try {
            loading.value = true
            error.value = ''

            const inquiryData = {
                ...formData,
                vehicleId,
                type: 'vehicle_inquiry'
            }

            // Simulation d'envoi API
            await new Promise(resolve => setTimeout(resolve, 1200))

            success.value = true

        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    return {
        loading: readonly(loading),
        success: readonly(success),
        error: readonly(error),
        sendMessage,
        sendVehicleInquiry
    }
}