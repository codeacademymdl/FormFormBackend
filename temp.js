const Model = require('./models/allforms');


const show = async () => {
  const content = await Model.getAllContent;
  console.log(content);
};

show();
