const ping = require('./ping');
// const getFormDetails = require('./getFormDetails');
const insertFormContent = require('./insertFormContent');


module.exports = [...ping, ...insertFormContent];
