<template>
  <box>
    <h1 class="title" slot="titulo">Cadastrar Receita</h1>
    <!--<botao slot="menu" :loading="isLoading" icon="sync"/>-->

    <section>
      <b-field label="Nome">
        <b-input placeholder="Nome do Paciente" :value="nome_paciente"/>
      </b-field>

      <columns v-for="(item, index) in itens">
        <column s2>
          <b-input :value="item.porcao" placeholder="Porção"></b-input>
        </column>
        <column s6>
          <b-input :value="item.descricao" placeholder="Descrição"></b-input>
        </column>
        <column s3>
          <b-field>
            <b-select :value="item.frequencia" placeholder="Frequência">
              <option :value="i" v-for="i in 24">{{i}} em {{i}} hora(s)</option>
            </b-select>
          </b-field>
        </column>
        <column s1>
          <botao icon="trash" class="is-danger" @click.native="removerItem(index)"/>
        </column>
      </columns>

      <div class="m-b-md">
        <botao tooltip="Adicionar item" text="Item" icon="plus" @click.native="novoItem"/>
      </div>
      <div class="has-text-right">
        <botao tooltip="Salvar" text="Salvar" css="is-warning m-r-sm" icon="save" @click.native="salvar"/>
        <botao tooltip="Salvar e Imprimir" text="Imprimir" icon="print" css="is-primary" @click.native="imprimir"/>
      </div>

    </section>
  </box>
</template>

<script>
  import {form} from '../../mixins/form'
  export default {
    mixins: [form],
    url: 'RECEITA.BASE',
    name: "FormReceita",
    data () {
      return {
        nome_paciente: '',
        itens: [],
        item: {
          porcao: '1 comp.',
          descricao: 'Dipirona',
          frequencia: 8
        }
      }
    },
    methods: {
      novoItem () {
        this.itens.push(this.item)
      },
      removerItem (index) {
        console.log(index, this.itens.splice(index, 1))
      },
      imprimir () {
        this.salvar()
        window.print()
      }
    }
  }
</script>

<style scoped>

</style>