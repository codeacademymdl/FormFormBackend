const Model = require('../../models');

module.exports = [{
  path: '/FormData',
  method: 'GET',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => {
    try {
      const data = await Model.allforms.getAllContent();
      console.log(data);
      return h.response({ form: data }).code(201);
    } catch (error) {
      return h.response({ errorMessage: 'Error!' }).code(500);
    }
  },
}];
