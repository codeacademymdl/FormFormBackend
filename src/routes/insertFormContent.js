const Model = require('../../models');

module.exports = [{
  path: '/insertFormContent',
  method: 'POST',
  handler: async (request, h) => {
    try {
      console.log(request.payload);
      const { formId, formName, formContent } = request.payload;
      await Model.allforms.generate(formId, formName, formContent);

      return h.response({ message: 'Data Inserted!!!' }).code(201);
    } catch (error) {
      return h.response({ errorMessage: 'Error!' }).code(500);
    }
  },
}];
