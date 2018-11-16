<template>
  <section class="container">

    <perfil/>

    <columns>
      <column s4>
        <ultimos-dados />
      </column>
      <column >
        <columns>
          <column><anotacoes /></column>
          <column><compartilhados /></column>
          <!--<column s2><mensagens /></column>-->
        </columns>
        <meus-pacientes />
      </column>
    </columns>

  </section>
</template>

<script>
  import UltimosDados from '../components/UltimosDados'
  import Anotacoes from '../components/Anotacoes'
  import Compartilhados from '../components/Compartilhados'
  // import Mensagens from '../components/Mensagens'
  import MeusPacientes from '../components/MeusPacientes'
  export default {
    // components: {UltimosDados, Anotacoes, Mensagens, Compartilhados, MeusPacientes}
    components: {UltimosDados, Anotacoes, Compartilhados, MeusPacientes}
  }
</script>