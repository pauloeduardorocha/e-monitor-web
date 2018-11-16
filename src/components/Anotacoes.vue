<template>
  <box>
    <h1 class="title" slot="titulo">Anotações</h1>
    <div slot="menu">
      <botao class="is-primary" :loading="isLoading" icon="plus"/>
      <botao  :loading="isLoading" icon="sync"/>
    </div>

    <b-table
        :data="data"
        :columns="columns"
        :selected.sync="selected"
        focusable>
    </b-table>

  </box>
</template>

<script>
  export default {
    data() {
      const data = [
        { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
        { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
      ]

      return {
        data,
        selected: data[1],
        columns: [
          {
            field: 'first_name',
            label: 'Paciente',
          },
          {
            field: 'last_name',
            label: 'Título',
          },
          {
            field: 'date',
            label: 'Data',
            centered: true
          },
          {
            field: 'gender',
            label: 'Sexo',
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>