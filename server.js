const next = require('next')
const Hapi = require('hapi')
const inert = require('inert')
const { parse } = require('url')

const port = parseInt(process.env.PORT, 10) || 3200
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = new Hapi.Server({ port })

const init = async () => {
  await server.register(inert)
  await app.prepare()
  const handler = app.getRequestHandler()

  server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: (request, h) => {
      return h.file('static/favicon.ico')
    }
  })

  server.route({
    method: 'GET',
    path: '/static/{param*}',
    handler: {
      directory: {
        path: 'static'
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/_next/{p*}' /* next specific routes */,
    handler: async ({ raw, url }, h) => {
      await handler(raw.req, raw.res, url)
      return h.close
    }
  })

  server.route({
    method: 'GET',
    path: '/read/{p*}' /* catch all route */,
    handler: async ({ raw: { req, res }, params }) => {
      return app.renderToHTML(req, res, '/read', { url: params.p })
    }
  })

  server.route({
    method: 'GET',
    path: '/_read' /* non-javascript browsers */,
    handler: async ({ raw: { req, res }, query }) => {
      return app.renderToHTML(req, res, '/read', { url: query.url })
    }
  })

  server.route({
    method: 'GET',
    path: '/{p*}' /* catch all route */,
    handler: async ({ raw: { req, res }, url }) => {
      const { pathname, query } = parse(url, true)
      return app.renderToHTML(req, res, pathname, query)
    }
  })

  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
