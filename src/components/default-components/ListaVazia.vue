<style scoped>
  div{ color: #AAA !important; }
</style>

<template>
  <div class="has-text-centered m-b">
    <p class="p-sm">
      <b-icon :icon="icon" size="is-medium" />
      <br/>
      {{ mensagem }}
    </p>
    <slot/>
  </div>
</template>

<script>
  export default {
    props: {
      mensagem: {
        type: String,
        default: 'Nenhum registro localizado.'
      },
      icon: {
        type: String,
        default: 'frown'
      }
    }
  }
</script>
