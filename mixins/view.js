export const view = {
  created () {
    if (this.$route && this.$route.params.id) {
      this.id = this.$route.params.id
    }
    if (this.$options.buscas) {
      this.buscas = this.$options.buscas
    }
    if (this.$options.url) {
        let url = this.$URL
        this.$options.url.split('.').forEach(s => { url = url[s] })
        this.url = url || this.$C.SERVER_ADDRESS + ':' + this.$C.SERVER_PORT + this.$options.url
    }
  },
  mounted () {
    if (this.url && this.id) {
      this.buscar()
    }
  },
  data () {
    return {
      id: null,
      objeto: null,
      url: null,
      loadingItem: [],
      itens: [],
      buscas: []
    }
  },
  methods: {
    buscar () {
      this.buscarGet()
      this.buscas.forEach(urlSufixo => this.buscarItem(urlSufixo))
    },
    buscarGet () {
      this.objeto = null
      this.httpGet(this.url + this.id).then(res => { this.objeto = res })
    },
    isLoadingItem (urlSufixo) {
      return this.loadingItem.indexOf(urlSufixo) >= 0
    },
    addLoadingItem (urlSufixo) {
      if (this.loadingItem.indexOf(urlSufixo) === -1) {
        this.loadingItem.push(urlSufixo)
      }
    },
    removeLoadingItem (urlSufixo) {
      let index = this.loadingItem.indexOf(urlSufixo)
      if (index >= 0) {
        this.loadingItem.splice(index, 1)
      }
    },
    getItem (urlSufixo) {
      let i = this.itens.find(item => item.key === urlSufixo)
      if (i) {
        return i.value
      } else {
        return []
      }
    },
    removeItem (urlSufixo) {
      let index = this.itens.findIndex(item => item.key === urlSufixo)
      if (index >= 0) {
        this.itens.splice(index, 1)
      }
    },
    addItem (urlSufixo, valor) {
      this.itens.push({
        key: urlSufixo,
        value: valor
      })
    },
    buscarItem (urlSufixo) {
      if (!this.isLoadingItem(urlSufixo)) {
        this.removeItem(urlSufixo)
        this.addLoadingItem(urlSufixo)
        this.httpGet(this.url + this.id + urlSufixo)
          .then(res => {
            this.addItem(urlSufixo, res)
            this.removeLoadingItem(urlSufixo)
          })
          .catch(res => this.removeLoadingItem(urlSufixo))
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.id = this.$route.params.id
    this.buscar()
  }
}
