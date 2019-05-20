const LOCAL = true

const TEST_ADDRESS = LOCAL ? 'http://localhost/e-monitor/' : 'http://localhost/e-monitor/'
const SERVER_ADDRESS = (process.env.NODE_ENV === 'production') ? 'https://api.sumicity.net.br' : TEST_ADDRESS

export const C = {
  SERVER_ADDRESS,
  URL: {
    PACIENTE: {
      BASE: SERVER_ADDRESS + 'paciente/'
    },
    RECEITA: {
      BASE: SERVER_ADDRESS + 'receita/'
    }
  }
}
