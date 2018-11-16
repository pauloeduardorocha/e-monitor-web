<template>
  <box class="has-text-centered is-clickable">
    <h1 class="title" slot="titulo">Pacientes compartilhados</h1>
    <!--<botao slot="menu" :loading="isLoading" icon="sync"/>-->
    <b-icon pack="fas" icon="share-alt" type="is-light" class="contador" />
    <span class="contador">{{ compartilhado }}</span>
  </box>
</template>

<script>
  export default {
    data() {
      return {
        compartilhado: 12
      }
    }
  }
</script>

<style>
  .contador {
    font-size: 5rem;
  }
  .contador svg {
    height: 5rem;
  }
  .is-clickable:hover {
    background-color: whitesmoke !important;
    cursor: pointer;
  }
</style>