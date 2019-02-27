
module.exports = (sequelize, DataTypes) => {
  const allforms = sequelize.define('allforms', {
    formId: DataTypes.INTEGER,
    formName: DataTypes.STRING,
    formContent: DataTypes.JSONB,

  }, {});


  allforms.generate = (formId, formName, formContent) => allforms.findOrCreate({
    where: {
      formId,
      formName,
      formContent,
    },
  }).then(() => (allforms)).catch((err) => {
    console.log(err);
  });


  allforms.getAllContent = async () => {
    const data = await allforms.findAll({
      attributes: ['formId', 'formName'],
    });
    return data;
  };


  return allforms;
};
