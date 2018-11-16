import Vue from 'vue'
import App from './App.vue'
import VueCookie from 'vue-cookie'
import VueResource from 'vue-resource'
import VueCurrencyFilter from 'vue-currency-filter'
import VueMoment from 'vue-moment'
import moment from 'moment'
import Buefy from 'buefy'
import VeeValidate, { Validator } from 'vee-validate'
import ptBR from 'vee-validate/dist/locale/pt_BR'
import money from 'v-money'
import store from './store/store'
import router from './router'
import {C} from './constante'
import httpRequest from './http-request'
import {mixinDefault} from '../mixins/default'
import VueApexCharts from 'vue-apexcharts'
import {booleano, truncate, cep, cpfcnpj, numero, telefone, item, itemApp, meses, dias, cores} from './const'

Vue.config.productionTip = false

Vue.filter('booleano', booleano)
Vue.filter('truncate', truncate)
Vue.filter('cep', cep)
Vue.filter('cpfcnpj', cpfcnpj)
Vue.filter('numero', numero)
Vue.filter('telefone', telefone)
Vue.filter('item', item)
Vue.filter('itemApp', itemApp)

Vue.component('botao', () => import('./components/default-components/Botao'))
Vue.component('box', () => import('./components/default-components/Box'))
Vue.component('column', () => import('./components/default-components/Column'))
Vue.component('columns', () => import('./components/default-components/Columns'))
Vue.component('lista-vazia', () => import('./components/default-components/ListaVazia'))
Vue.component('perfil', () => import('./components/default-components/Perfil'))

Validator.localize('pt_BR', ptBR)

Vue.use(VueCookie)
Vue.use(VueResource)
Vue.use(VueApexCharts)
Vue.use(VueMoment, {moment})
Vue.use(VeeValidate, { locale: 'pt_BR', delay: '5' })
Vue.use(money, {decimal: ',', thousands: '.', precision: 2, masked: false})
Vue.use(VueCurrencyFilter,
  {
    symbol: 'R$',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })
Vue.use(Buefy, {defaultIconPack: 'fas', defaultDateFormatter: date => date.toLocaleDateString('pt-BR')})

Vue.prototype.$debug = (mtd, msg) => {
  if (process.env.NODE_ENV !== 'production') {
    window.console.log(mtd, msg)
  }
}
Vue.prototype.$URL = C.URL
Vue.prototype.$meses = meses
Vue.prototype.$dias = dias
Vue.prototype.$cores = cores
Vue.prototype.$clonar = (obj) => JSON.parse(JSON.stringify(obj))
Vue.prototype.$domain = (process.env.NODE_ENV === 'development') ? 'localhost' : 'e-monitor.net.br'
Vue.prototype.$sistema = {
  nome: 'E-Monitor',
  icone: 'sync',
  versao: '0.0.1',
  codigo: 'E_MONITOR'
}
Vue.prototype.$httpRequest = httpRequest
Vue.mixin(mixinDefault)

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
