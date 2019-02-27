

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('allforms', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    formId: {
      type: Sequelize.INTEGER,
    },
    formName: {
      type: Sequelize.STRING,
    },
    formContent: {
      type: Sequelize.JSONB,
    },
    formFields: {
      type: Sequelize.JSONB,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('allforms'),
};
