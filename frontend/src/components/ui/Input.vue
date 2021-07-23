<template>
  <div class="inpt">
    <input
      :id="id"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="holder"
      :class="[classEl, 'inpt__input']"
    >
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    holder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      required: true
    },
    classEl: {
      type: String,
      default: ''
    }
  }
}
</script>
