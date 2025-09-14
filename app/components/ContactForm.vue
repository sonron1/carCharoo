<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
          Nom complet *
        </label>
        <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="input-field w-full"
            :class="{ 'border-red-500': errors.name }"
            placeholder="Votre nom complet"
        >
        <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
          Téléphone *
        </label>
        <input
            id="phone"
            v-model="form.phone"
            type="tel"
            required
            class="input-field w-full"
            :class="{ 'border-red-500': errors.phone }"
            placeholder="+229 XX XX XX XX"
        >
        <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
      </div>
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
        Email *
      </label>
      <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="input-field w-full"
          :class="{ 'border-red-500': errors.email }"
          placeholder="votre@email.com"
      >
      <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
    </div>

    <div v-if="vehicleId">
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Véhicule d'intérêt
      </label>
      <div class="bg-gray-50 p-3 rounded-lg">
        <p class="text-sm text-gray-600">{{ vehicleName }}</p>
      </div>
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
        Message *
      </label>
      <textarea
          id="message"
          v-model="form.message"
          required
          rows="5"
          class="input-field w-full resize-none"
          :class="{ 'border-red-500': errors.message }"
          :placeholder="vehicleId ? 'Je suis intéressé par ce véhicule...' : 'Votre message'"
      ></textarea>
      <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
    </div>

    <div class="flex items-center space-x-4">
      <UiButton
          type="submit"
          :loading="loading"
          :disabled="!isFormValid"
          class="flex-1 md:flex-none"
      >
        {{ loading ? 'Envoi...' : 'Envoyer le message' }}
      </UiButton>

      <UiButton
          variant="outline"
          type="button"
          @click="resetForm"
          :disabled="loading"
      >
        Réinitialiser
      </UiButton>
    </div>

    <!-- Messages de succès/erreur -->
    <Transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="opacity-0 transform translate-y-2"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform translate-y-2"
    >
      <div v-if="success" class="bg-green-50 border border-green-200 rounded-lg p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-green-800">
              Message envoyé avec succès ! Nous vous contacterons bientôt.
            </p>
          </div>
        </div>
      </div>
    </Transition>

    <Transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="opacity-0 transform translate-y-2"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform translate-y-2"
    >
      <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-red-800">
              {{ error }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </form>
</template>

<script setup>
const props = defineProps({
  vehicleId: {
    type: Number,
    default: null
  },
  vehicleName: {
    type: String,
    default: ''
  }
})

const { sendMessage, sendVehicleInquiry, loading, success, error } = useContact()

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const errors = ref({})

const isFormValid = computed(() => {
  return form.value.name && form.value.email && form.value.phone && form.value.message
})

const validateForm = () => {
  errors.value = {}

  if (!form.value.name.trim()) {
    errors.value.name = 'Le nom est requis'
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'L\'email est requis'
  } else if (!/^\S+@\S+\.\S+$/.test(form.value.email)) {
    errors.value.email = 'Format d\'email invalide'
  }

  if (!form.value.phone.trim()) {
    errors.value.phone = 'Le téléphone est requis'
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Le message est requis'
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
  if (!validateForm()) return

  try {
    if (props.vehicleId) {
      await sendVehicleInquiry(props.vehicleId, form.value)
    } else {
      await sendMessage(form.value)
    }

    if (success.value) {
      resetForm()
    }
  } catch (err) {
    console.error('Erreur lors de l\'envoi:', err)
  }
}

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
  errors.value = {}
}
</script>