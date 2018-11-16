<template>
  <box class="has-text-centered">
    <h1 class="title" slot="titulo">Mensagens</h1>
    <!--<botao slot="menu" :loading="isLoading" icon="sync"/>-->
    <b-icon icon="envelope" type="is-light" class="contador" />
    <span class="contador">{{ mensagens }}</span>
  </box>
</template>

<script>
  export default {
    data() {
      return {
        mensagens: 2
      }
    }
  }
</script>

<style scoped>
  .contador {
    font-size: 5rem;
  }
</style>