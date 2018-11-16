export const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
export const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
export const cores = ['rgba(51, 102, 204, 0.7)',
    'rgba(220, 57, 18, 0.7)',
    'rgba(255, 153, 0, 0.7)',
    'rgba(16, 150, 24, 0.7)',
    'rgba(153, 0, 153, 0.7)',
    'rgba(59, 62, 172, 0.7)',
    'rgba(0, 153, 198, 0.7)',
    'rgba(221, 68, 119, 0.7)',
    'rgba(102, 170, 0, 0.7)',
    'rgba(184, 46, 46, 0.7)',
    'rgba(49, 99, 149, 0.7)',
    'rgba(153, 68, 153, 0.7)',
    'rgba(34, 170, 153, 0.7)',
    'rgba(170, 170, 17, 0.7)',
    'rgba(102, 51, 204, 0.7)',
    'rgba(230, 115, 0, 0.7)',
    'rgba(139, 7, 7, 0.7)',
    'rgba(50, 146, 98, 0.7)',
    'rgba(85, 116, 166, 0.7)',
    'rgba(59, 62, 172, 0.7)',
    'rgba(243, 116, 34, 0.7)',
    'rgba(23, 55, 72, 0.7)',
    'rgba(54, 33, 45, 0.7)',
    'rgba(165, 22, 43, 0.7)',
    'rgba(98, 4, 23, 0.7)',
    'rgba(108, 63, 75, 0.7)',
    'rgba(76, 6, 13, 0.7)',
    'rgba(165, 1, 43, 0.7)',
    'rgba(43, 21, 15, 0.7)',
    'rgba(159, 32, 172, 0.7)']

export const booleano = function (value, sim, nao) {
  sim = sim || 'Sim'
  nao = nao || 'Não'
  if (value) { return sim }
  return nao
}

export const truncate = function (value, length) {
  if (value === null || value === undefined || value.length < length) { return value }
  length = length - 3
  return value.substring(0, length) + '...'
}

export const telefone = function(value) {
  if (value) {
    return value.toString().replace(/[^0-9]/g, '').replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
  }
  return value
}

export const numero = function(value, casasDecimais) {
  if (value) {
    if (casasDecimais) {
      return value.toLocaleString('pt-BR', { minimumFractionDigits: casasDecimais })
    }
    return value.toLocaleString('pt-BR')
  }
  return value
}

export const cpfcnpj = function(value) {
  if (value) {
    let digitos = value.toString().replace(/[^0-9]/g, '')
    if (digitos.length === 11) {
      return digitos.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-')
    }
    if (digitos.length === 14) {
      return digitos.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4-')
    }
  }
  return value
}

export const cep = function(value) {
  if (value) {
    return value.toString().replace(/[^0-9]/g, '').replace(/(\d{2})(\d{3})/, '$1.$2-')
  }
  return value
}

export const item = function(value, catalogos, atributo) {
  if (value) {
    let item
    if (catalogos) {
      catalogos.forEach(c => {
        if (!item) {
          let it = c.itens.filter(i => {
            return i.codigo.toUpperCase() === value.toUpperCase()
          })
          if (it) {
            item = it[0]
          }
        }
      })
    }
    if (item) {
      if (atributo === 'nome') {
        return item.nome
      }
      if (atributo === 'cor') {
        return item.cor
      }
      if (atributo === 'icone') {
        return item.icone
      }
      if (atributo === 'descricao') {
        return item.descricao
      }
      return item.nome
    }
    return null
  } else {
    return null
  }
}

export const itemApp = function(value, catalogos, atributo) {
  if (value) {
    let item
    if (catalogos) {
      catalogos.forEach(c => {
        if (!item) {
          let it = c.itens.filter(i => {
            return i.codigo.toUpperCase() === value.toUpperCase()
          })
          if (it) {
            item = it[0]
          }
        }
      })
    }
    if (item) {
      if (atributo === 'nome') {
        return item.nome
      }
      if (atributo === 'cor') {
        return item.cor
      }
      if (atributo === 'icone') {
        return 'fas ' + item.icone
      }
      if (atributo === 'descricao') {
        return item.descricao
      }
      return item.nome
    }
    return null
  } else {
    return null
  }
}
