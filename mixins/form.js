export const form = {
  created () {
    if (this.parametro) {
      this.objeto = this.$clonar(this.parametro)
    } else {
      this.objeto = this.initObjeto()
    }
    if (this.$options.url) {
        let url = this.$URL
        this.$options.url.split('.').forEach(s => { url = url[s] })
        this.url = url || this.$C.SERVER_ADDRESS + ':' + this.$C.SERVER_PORT + this.$options.url
    }
  },
  props: ['parametro'],
  data () {
    return {
      mensagemExcluir: 'Deseja realmente excluir este item? <br> Esta ação não pode ser desfeita.',
      url: '',
      sufixoUrl: '',
      objeto: null,
      camposValidados: [],
      loadingCampo: []
    }
  },
  methods: {
    depoisDeSalvar (res) {
    },
    depoisDeDeletar () {
    },
    initObjeto () {
      return {}
    },
    salvar () {
      this.$validator.validateAll().then(res => {
        if (res) {
          if (this.objeto.id) {
            this.httpPut(this.url + this.objeto.id + '/' + this.sufixoUrl, this.objeto).then(res => {
              this.mensagemForm(res)
              this.depoisDeSalvar(res)
            })
          } else {
            this.httpPost(this.url + this.sufixoUrl, this.objeto).then(res => {
              this.mensagemForm(res)
              this.depoisDeSalvar(res)
            })
          }

        }
      })
    },
    deletar () {
      this.$dialog.confirm({
        message: this.mensagemExcluir,
        cancelText: 'Não',
        confirmText: 'Sim, Excluir!',
        hasIcon: true,
        type: 'is-danger',
        onConfirm: () => this.httpDelete(this.url + this.objeto.id).then(res => {
          this.mensagemForm(res)
          this.depoisDeDeletar()
        })
      })
    },
    mensagemForm (res) {
      this.toast(res)
      this.$emit('close', res)
    },
    errorType (campo) {
      if (this.errors.has(campo)) {
        return 'is-danger'
      } else {
        if (this.camposValidados.indexOf(campo) >= 0) {
          return 'is-success'
        }
      }
    },
    addCampoValido (campo) {
      if (this.camposValidados.indexOf(campo) === -1) {
        this.camposValidados.push(campo)
      }
    },
    removeCampoValido (campo) {
      let index = this.camposValidados.indexOf(campo)
      if (index >= 0) {
        this.camposValidados.splice(index, 1)
      }
    },
    addLoadingCampo (campo) {
      if (this.loadingCampo.indexOf(campo) === -1) {
        this.loadingCampo.push(campo)
      }
    },
    removeLoadingCampo (campo) {
      let index = this.loadingCampo.indexOf(campo)
      if (index >= 0) {
        this.loadingCampo.splice(index, 1)
      }
    },
    isLoadingField (campo) {
      return this.loadingCampo.indexOf(campo) >= 0
    },
    checkUnique (campo) {
      this.removeCampoValido(campo)
      if (!this.errors.has(campo)) {
        this.addLoadingCampo(campo)
        this.$http.post(this.url + 'validar/' + campo, this.objeto, {headers: {token: this.$cookie.get('token')}})
          .then(res => {
            this.addCampoValido(campo)
            this.removeLoadingCampo(campo)
          })
          .catch(res => {
            this.errors.add(campo, res.body.message)
            this.removeLoadingCampo(campo)
          })
      }
    }
  }
}
