<style lang="scss" src="./assets/style.scss"></style>
<template>
  <div id="app">

    <navbar-menu />

    <div class="page m-md">
      <columns>
        <column s2>
          <box>
            <sidebar />
          </box>
        </column>
        <column>
          <router-view />
        </column>
      </columns>
    </div>

  </div>
</template>

<script>
import NavbarMenu from './components/Menu.vue'
import Sidebar from './components/default-components/Sidebar.vue'

export default {
  name: 'app',
  components: {NavbarMenu, Sidebar}
}
</script>