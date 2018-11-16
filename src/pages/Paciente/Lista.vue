<template>
  <box>
    <h1 class="title" slot="titulo">Pacientes</h1>
    <div slot="menu">
      <botao text="Novo" class="is-primary" icon="plus" :loading="isLoading"/>
      <botao @click.native="listar()" icon="sync" :loading="isLoading"/>
    </div>

    <b-table :data="lista" paginated :per-page="20" @click="e => $router.push('paciente/' + e.id)">
      <template slot="empty">
        <lista-vazia />
      </template>
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>
          {{ props.row.id }}
        </b-table-column>
        <b-table-column field="nome" label="Nome" sortable>
          {{ props.row.nome }}
        </b-table-column>
        <b-table-column field="cpf" label="CPF" sortable>
          {{ props.row.cpf }}
        </b-table-column>
        <b-table-column field="descricao" label="Descrição" sortable>
          {{ props.row.descricao }}
        </b-table-column>
        <b-table-column field="data_nascimento" label="Data de Nascimento" sortable>
          {{ props.row.data_nascimento | moment('DD/MM/YYYY') }}
        </b-table-column>
        <b-table-column field="cadastro" label="Data de Cadastro" sortable>
          {{ props.row.cadastro | moment('DD/MM/YYYY') }}
        </b-table-column>
        <b-table-column field="sexo" label="Sexo" sortable>
          {{ props.row.sexo }}
        </b-table-column>
      </template>

    </b-table>

  </box>
</template>

<script>
  import {listagem} from "../../../mixins/listagem";

  export default {
    url: 'PACIENTE.BASE',
    mixins: [listagem],
    data () {
      return {
        busca: ''
      }
    },
    computed: {
      dados () {
        return this.lista.filter(i => i.includes(this.busca))
      }
    }
  }
</script>
