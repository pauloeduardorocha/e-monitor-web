import Vue from 'vue'

export default {
  get (url) {
    if (Vue && Vue.http && Vue.cookie) {
      return Vue.http.get(url, {headers: {token: 'Pojg2wrefg'}})
        .then((response) => Promise.resolve(response.data))
        .catch((error) => Promise.reject(error))
    } else {
      return Promise.reject('vue-resource ou vue-cookie não configurado.')
    }
  },
  post (url, body) {
    if (Vue && Vue.http && Vue.cookie) {
      return Vue.http.post(url, body || {}, {headers: {token: 'Pojg2wrefg'}})
        .then((response) => Promise.resolve(response))
        .catch((error) => Promise.reject(error))
    } else {
      return Promise.reject('vue-resource ou vue-cookie não configurado.')
    }
  },
  put (url, body) {
    if (Vue && Vue.http && Vue.cookie) {
      return Vue.http.put(url, body || {}, {headers: {token: 'Pojg2wrefg'}})
        .then((response) => Promise.resolve(response))
        .catch((error) => Promise.reject(error))
    } else {
      return Promise.reject('vue-resource ou vue-cookie não configurado.')
    }
  },
  delete (url) {
    if (Vue && Vue.http && Vue.cookie) {
      return Vue.http.delete(url, {headers: {token: 'Pojg2wrefg'}})
        .then((response) => Promise.resolve(response))
        .catch((error) => Promise.reject(error))
    } else {
      return Promise.reject('vue-resource ou vue-cookie não configurado.')
    }
  }
}
