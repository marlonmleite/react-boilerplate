import Joi from 'joi'

const stubConfiguration = {
  host: 'localhost',
  port: 3000,
  routes: {
    validate: {
      headers: Joi.object({
        'accept-language': Joi.string(),
        authorization: Joi.string(),
      }).options({
        allowUnknown: true,
      }),
    },
    cors: {
      origin: ['*'],
      headers: [
        'content-type',
        'accept-language',
      ],
      additionalHeaders: ['accept', 'authorization', 'content-type'],
    },
  },
}

export default stubConfiguration
