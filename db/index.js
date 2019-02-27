

const Sequelize = require('sequelize');

const sequelize = new Sequelize('schools', 'Vibhore_Gupta', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
});


const showContent = (data) => {
  console.log(data);
  const Users = sequelize.define('students', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,

  });

  sequelize.sync().then(() => Users.create({
    firstName: data.firstName,
    lastName: data.lastName,

  }))
    .then((details) => {
      console.log(details.toJSON());
    });
};


module.exports = { showContent };
