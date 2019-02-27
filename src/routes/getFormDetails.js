const { addContentToDb } = require('../../db/index');

module.exports = [{
  path: '/insert',
  method: 'POST',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => {
    try {
      console.log(request.payload);
      addContentToDb(request.payload);

      return h.response({ message: 'data passed' }).code(201);
    } catch (error) {
      return h.response({ errorMessage: 'Error!' }).code(500);
    }
  },
}];
