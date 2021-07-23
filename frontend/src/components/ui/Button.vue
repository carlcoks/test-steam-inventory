<template>
  <button
    @click.prevent="$emit('click')"
    :disabled="disabled"
    :type="type"
    class="btn"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
