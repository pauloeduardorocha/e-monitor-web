export const listagem = {

  mounted () {
    this.filtro = this.$clonar(this.filtroPadrao)
    if (this.$options.paginar) {
      this.paginar = true
      this.metodo = 'PUT'
    }
    if (this.$options.metodo) {
      this.metodo = this.$options.metodo
    }
    if (this.$options.url) {
      let url = this.$URL
      this.$options.url.split('.').forEach(s => { url = url[s] })
      this.url = url || this.$C.SERVER_ADDRESS + ':' + this.$C.SERVER_PORT + this.$options.url
      this.listar()
    }
  },
  data () {
    return {
      lista: [],
      filtro: {},
      filtroPadrao: {},
      pagina: {},
      sortField: 'id',
      sortOrder: 'DESC',
      page: 0,
      perPage: 20,
      url: null,
      paginar: false,
      metodo: 'GET',
      selecionado: null
    }
  },
  methods: {
    depoisDeListar () {},
    depoisDeMudarPagina () {},
    depoisDoSort () {},
    depoisDeFiltrar () {},
    listar () {
      this.lista = []
      let path = this.url + ((this.paginar) ? this.query() : '')
      if (this.metodo === 'PUT') {
        this.httpPut(path, this.filtro).then(res => this.listagemCarregada(res))
      } else {
        this.httpGet(path).then(res => this.listagemCarregada(res))
      }
    },
    query () {
      return `?size=${this.perPage}&page=${this.page}&order=${this.sortField}&direction=${this.sortOrder.toUpperCase()}`
    },
    onPageChange (page) {
      this.page = page - 1
      this.listar()
      this.depoisDeMudarPagina()
    },
    onSort (field, order) {
      this.sortField = field
      this.sortOrder = order
      this.listar()
      this.depoisDoSort()
    },
    filtrar () {
      this.resetPagina()
      this.listar()
      this.depoisDeFiltrar()
    },
    limparFiltro () {
      this.filtro = this.$clonar(this.filtroPadrao)
      this.filtrar()
    },
    resetPagina () {
      this.page = 0
    },
    listagemCarregada (res) {
      if (this.paginar) {
        this.pagina = (this.metodo === 'GET') ? res : res.body
        this.lista = this.pagina.content
      } else {
        this.lista = (this.metodo === 'GET') ? res : res.body
      }
      this.depoisDeListar()
    }
  }
}
