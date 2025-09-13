export default defineEventHandler(async (event) => {
    try {
        // Récupération des données du formulaire
        const body = await readBody(event)

        // Validation des données requises
        const requiredFields = ['name', 'email', 'phone', 'message']
        const missingFields = requiredFields.filter(field => !body[field])

        if (missingFields.length > 0) {
            throw createError({
                statusCode: 400,
                statusMessage: `Champs manquants: ${missingFields.join(', ')}`
            })
        }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(body.email)) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Format d\'email invalide'
            })
        }

        // Validation du téléphone (format béninois)
        const phoneRegex = /^(\+229)?[0-9]{8}$/
        if (!phoneRegex.test(body.phone.replace(/\s+/g, ''))) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Format de téléphone invalide'
            })
        }

        // Simulation d'un traitement (envoi d'email, sauvegarde en base, etc.)
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Préparation des données pour la sauvegarde/traitement
        const contactData = {
            id: Date.now(), // ID temporaire
            name: body.name.trim(),
            email: body.email.trim().toLowerCase(),
            phone: body.phone.trim(),
            message: body.message.trim(),
            vehicleId: body.vehicleId || null,
            vehicleName: body.vehicleName || null,
            type: body.vehicleId ? 'vehicle_inquiry' : 'general_contact',
            status: 'new',
            createdAt: new Date().toISOString(),
            ipAddress: getClientIP(event),
            userAgent: getHeader(event, 'user-agent')
        }

        // Simulation d'envoi d'email de notification à l'équipe
        console.log('📧 Nouveau message de contact:', {
            from: contactData.email,
            subject: contactData.vehicleId ?
                `Demande d'info - ${contactData.vehicleName}` :
                'Nouveau message de contact',
            message: contactData.message
        })

        // Simulation d'envoi d'email de confirmation au client
        console.log('📧 Email de confirmation envoyé à:', contactData.email)

        // Dans un vrai projet, ici on sauvegarderait en base de données
        // await saveContactToDatabase(contactData)

        // Et on enverrait les emails
        // await sendNotificationEmail(contactData)
        // await sendConfirmationEmail(contactData)

        return {
            success: true,
            message: 'Message envoyé avec succès',
            data: {
                id: contactData.id,
                timestamp: contactData.createdAt
            }
        }

    } catch (error) {
        // Gestion des erreurs
        console.error('❌ Erreur lors du traitement du contact:', error)

        if (error.statusCode) {
            throw error // Erreur déjà formatée
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Erreur interne du serveur'
        })
    }
})

// Fonction utilitaire pour obtenir l'IP du client
function getClientIP(event) {
    return getHeader(event, 'x-forwarded-for') ||
        getHeader(event, 'x-real-ip') ||
        getHeader(event, 'cf-connecting-ip') ||
        'unknown'
}