<template>
  <div id="app">
    <div class="wrapper">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
