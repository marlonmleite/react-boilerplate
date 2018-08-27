import mock from './mock'

const example = {
  route: {
    method: 'GET',
    path: '/example',
    handler: (req, reply) => reply(mock),
  },
}

export default example
