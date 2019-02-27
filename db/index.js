

const Sequelize = require('sequelize');

const sequelize = new Sequelize('schools', 'Vibhore_Gupta', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
});


const addContentToDb = (data) => {
  // console.log(data);
  const allKeys = Object.keys(data);
  const tableName = data.name;
  const Keys = allKeys.slice(1);
  // console.log(Keys);
  const tableColumns = {};
  Keys.forEach((key) => {
    tableColumns[key] = Sequelize.STRING;
  });

  // console.log('tableCOlimn', tableColumns);


  // const Users = sequelize.define(tableName, {

  //   firstName: Sequelize.STRING,
  //   lastName: Sequelize.STRING,

  // });
  const Users = sequelize.define(tableName, tableColumns);

  const userDetails = {};
  Keys.forEach((key) => {
    userDetails[key] = data[key];
  });

  console.log('userDetails', userDetails);

  sequelize.sync().then(() => Users.create(userDetails))
    .then((details) => {
      console.log(details.toJSON());
    });
};


module.exports = { addContentToDb };
