
module.exports = (sequelize, DataTypes) => {
  const allforms = sequelize.define('allforms', {
    formId: DataTypes.INTEGER,
    formName: DataTypes.STRING,
    formContent: DataTypes.JSONB,
    formFields: DataTypes.JSONB,

  }, {});


  allforms.generate = (formId, formName, formContent, formFields) => allforms.findOrCreate({
    where: {
      formId,
      formName,
      formContent,
      formFields,

    },
  }).then(() => (allforms)).catch((err) => {
    console.log(err);
  });


  allforms.getAllContent = async () => {
    const data = await allforms.findAll({
      attributes: ['formId', 'formName', 'createdAt', 'formFields'],
    });
    return data;
  };


  return allforms;
};
