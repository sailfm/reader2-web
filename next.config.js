module.exports = {
  publicRuntimeConfig: {
    // available to server and client
    API_HOST: process.env.API_HOST || 'http://localhost:3201'
  },
  serverRuntimeConfig: {
    // available only to server
    mySecret: 'secret'
  }
}
