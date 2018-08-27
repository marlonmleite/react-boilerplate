import Hapi from 'hapi'
import map from 'lodash/map'
import routes from './routes'
import config from './config'

const server = new Hapi.Server(config)

server.ext('onPreResponse', (response, h) => {
  return new Promise(resolve => setTimeout(() => resolve(h.continue), 500))
})

map(routes, routeModule => map(routeModule, route => server.route(route)))

const init = async () => {
  try {
    await server.start()
  } catch (err) {
    console.log(err)
  }
}

init()
