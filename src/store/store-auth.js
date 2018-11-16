const state = {
  permissoes: [],
  catalogos: [],
  tentouRedirect: false
}

const mutations = {
  registrarPermissoes (state, payload) { state.permissoes = payload },
  registrarRedirect (state, payload) {state.tentouRedirect = payload },
  registrarCatalogos (state, payload) { state.catalogos = payload }
}

const actions = {}
const getters = {}

export const auth = { state, mutations, actions, getters }
