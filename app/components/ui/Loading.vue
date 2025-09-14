<template>
  <div class="flex items-center justify-center" :class="containerClass">
    <div class="animate-spin rounded-full border-b-2 border-current" :class="spinnerClass"></div>
    <span v-if="text" class="ml-3" :class="textClass">{{ text }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  color: {
    type: String,
    default: 'blue'
  },
  text: {
    type: String,
    default: ''
  },
  center: {
    type: Boolean,
    default: false
  }
})

const containerClass = computed(() => {
  return props.center ? 'min-h-[200px]' : ''
})

const spinnerClass = computed(() => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }

  const colors = {
    blue: 'border-blue-600',
    yellow: 'border-yellow-600',
    gray: 'border-gray-600'
  }

  return `${sizes[props.size]} ${colors[props.color]}`
})

const textClass = computed(() => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return sizes[props.size]
})
</script>