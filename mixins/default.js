export const mixinDefault = {
  created () {
    var acesso = this.$options.acesso
    if (acesso) {
      if (!this.$cookie.get('token')) {
        this.$router.push('/login')
      } else if (this.permissoes.indexOf(acesso) === -1) {
        const rota = this.$route.path
        this.tentouRedirect ? this.$router.push('/403') : this.$router.push({path: '/permissoes', query: { destino: rota }})
        // this.$router.push('/403')
      }
    }
    if (!this.$store) {
      this.$store = this.store
    }
  },
  props: ['store'],
  data () {
    return {
      isLoading: false,
      isFailed: false,
      failMessage: '',
    }
  },
  methods: {
    httpGet (url) {
      this.isLoading = true
      this.isFailed = false
      this.failMessage = ''
      return this.$httpRequest.get(url)
        .then((response) => {
          this.$debug('httpGet OK ' + url, response)
          this.isLoading = false
          return Promise.resolve(response)
        })
        .catch((error) => {
          this.$debug('httpGet ERROR ' + url, error)
          this.isLoading = false
          this.toast(error)
          return Promise.reject(error)
        })
    },
    httpPost (url, body) {
      this.isLoading = true
      this.isFailed = false
      this.failMessage = ''
      return this.$httpRequest.post(url, body)
        .then((response) => {
          this.$debug('httpGet OK ' + url, response)
          this.isLoading = false
          return Promise.resolve(response)
        })
        .catch((error) => {
          this.$debug('httpPost ERROR ' + url, error)
          this.isLoading = false
          this.toast(error)
          return Promise.reject(error)
        })
    },
    httpPut (url, body) {
      this.isLoading = true
      this.isFailed = false
      this.failMessage = ''
      return this.$httpRequest.put(url, body)
        .then((response) => {
          this.$debug('httpPut OK ' + url, response)
          this.isLoading = false
          return Promise.resolve(response)
        })
        .catch((error) => {
          this.$debug('httpPut ERROR ' + url, error)
          this.isLoading = false
          this.toast(error)
          return Promise.reject(error)
        })
    },
    httpDelete (url) {
      this.isLoading = true
      this.isFailed = false
      this.failMessage = ''
      return this.$httpRequest.delete(url)
        .then((response) => {
          this.$debug('httpDelete OK ' + url, response)
          this.isLoading = false
          return Promise.resolve(response)
        })
        .catch((error) => {
          this.$debug('httpDelete ERROR ' + url, error)
          this.isLoading = false
          this.toast(error)
          return Promise.reject(error)
        })
    },
    toast (response) {
      let msg = (response.body) ? response.body.message : response
      let tipo
      switch (response.status) {
        case 0:
        case 404:
          tipo = 'is-warning'
          msg = 'Ops! Nosso servidor está offline, tente novamente mais tarde.'
          this.isFailed = true
          this.failMessage = msg
          break
        case 422:
        case 500:
          tipo = 'is-danger'
          this.isFailed = true
          this.failMessage = msg
          break
        case 200:
          tipo = 'is-info'
          break
        case 201:
          tipo = 'is-success'
          break
      }
      if (this.$toast) {
        this.$toast.open({
          message: msg,
          type: tipo,
          duration: 7 * 1000
        })
      } else {
        console.error('Buefy.toast não configurado.')
        alert(msg)
      }
    },
    permitir (permissao) {
      return this.permissoes.indexOf(permissao) > -1
    },
    catalogo (codigo) {
      let catalogo = this.catalogos.filter(c => { return c.codigo.toUpperCase().indexOf(codigo.toUpperCase()) > -1 })
      if (catalogo.length > 0) {
        return catalogo[0]
      } else {
        return { itens: [] }
      }
    },
    informarFalha (res) {
      this.isFailed = true
      console.error(res)
    }
  },
  computed: {
    usuarioLogado () {
      return {
        email: this.$cookie.get('email'),
        nome: this.$cookie.get('nome'),
        foto: this.$cookie.get('foto'),
        token: this.$cookie.get('token'),
        codigo: this.$cookie.get('codigo'),
        setor: this.$cookie.get('setor'),
        filas: JSON.parse(this.$cookie.get('filas')),
        unidades: (this.$cookie.get('unidades')) ? this.$cookie.get('unidades').split(',') : null
      }
    },
    permissoes () {
      if (this.$store && this.$store.state && this.$store.state.auth && this.$store.state.auth.permissoes) {
        return this.$store.state.auth.permissoes
      } else {
        console.error('Vuex auth não configurado.')
        return []
      }
    },
    tentouRedirect () {
      if (this.$store && this.$store.state && this.$store.state.auth && this.$store.state.auth.tentouRedirect) {
        return this.$store.state.auth.tentouRedirect
      } else {
        console.log('Vuex auth não configurado para o redirect.')
        return false
      }
    },
    catalogos () {
      if (this.$store && this.$store.state && this.$store.state.auth && this.$store.state.auth.catalogos) {
        return this.$store.state.auth.catalogos
      } else {
        console.error('Vuex auth não configurado.')
        return []
      }
    }
  }
}
