const ping = require('./ping');
// const getFormDetails = require('./getFormDetails');
const insertFormContent = require('./insertFormContent');
const getFormContent = require('./getFormContent');


module.exports = [...ping, ...insertFormContent, ...getFormContent];
