<template>
  <section class="container">

    <perfil/>

    <columns>
      <column s6>
        <form-receita />
      </column>
    </columns>

  </section>
</template>

<script>

  import FormReceita from '../components/FormReceita'
  export default {
    components: {FormReceita}
  }
</script>