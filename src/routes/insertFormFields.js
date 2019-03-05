const Model = require('../../models');

module.exports = [{
  path: '/insertFormField',
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
      // console.log(Model);
      const {
        formId, fields,
      } = request.payload;
      const a = await Model.formfields.generate(formId, fields);
      console.log(a);

      return h.response({ message: 'Data Inserted!!!' }).code(201);
    } catch (error) {
      return h.response({ errorMessage: 'Error!' }).code(500);
    }
  },
}];
