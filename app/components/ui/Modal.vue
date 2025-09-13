<template>
  <Teleport to="body">
    <Transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div
          v-if="modelValue"
          class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          @click.self="closeModal"
      >
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black opacity-50"></div>

        <!-- Modal -->
        <Transition
            enter-active-class="duration-300 ease-out"
            enter-from-class="opacity-0 transform translate-y-4 scale-95"
            enter-to-class="opacity-100 transform translate-y-0 scale-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100 transform translate-y-0 scale-100"
            leave-to-class="opacity-0 transform translate-y-4 scale-95"
        >
          <div
              v-if="modelValue"
              class="relative w-auto max-w-3xl mx-auto my-6"
          >
            <div class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <!-- Header -->
              <div v-if="title || $slots.header" class="flex items-start justify-between p-5 border-b border-gray-200 rounded-t">
                <slot name="header">
                  <h3 class="text-2xl font-semibold text-gray-900">
                    {{ title }}
                  </h3>
                </slot>
                <button
                    class="p-1 ml-auto bg-transparent border-0 text-gray-400 hover:text-gray-600 text-3xl leading-none font-semibold outline-none focus:outline-none"
                    @click="closeModal"
                >
                  ×
                </button>
              </div>

              <!-- Body -->
              <div class="relative p-6 flex-auto">
                <slot />
              </div>

              <!-- Footer -->
              <div v-if="$slots.footer" class="flex items-center justify-end p-6 border-t border-gray-200 rounded-b">
                <slot name="footer" />
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue', 'close'])

const closeModal = () => {
  if (props.closeOnBackdrop) {
    emit('update:modelValue', false)
    emit('close')
  }
}

// Empêcher le scroll du body quand la modal est ouverte
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Nettoyage au démontage
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>