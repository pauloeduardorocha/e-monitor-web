import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from './store-auth'

Vue.use(Vuex)

const state = {}
const mutations = {}
const actions = {}
const getters = {}
const modules = {auth}

export default new Vuex.Store({state, mutations, actions, getters, modules})
