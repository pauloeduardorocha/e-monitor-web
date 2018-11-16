<style lang="scss" src="./assets/style.scss"></style>
<template>
  <div id="app">

    <navbar-menu />

    <div class="page m-md">
      <router-view />
    </div>

  </div>
</template>

<script>
import NavbarMenu from './components/Menu.vue'

export default {
  name: 'app',
  components: {NavbarMenu}
}
</script>