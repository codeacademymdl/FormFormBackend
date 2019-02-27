
module.exports = (sequelize, DataTypes) => {
  const formfields = sequelize.define('formfields', {
    formId: DataTypes.INTEGER,
    fields: DataTypes.JSONB,
  }, {});


  formfields.generate = (formId, fields) => formfields.findOrCreate({
    where: {
      formId,
      fields,
    },
  }).then(() => (formfields)).catch((err) => {
    console.log(err);
  });
  return formfields;
};
