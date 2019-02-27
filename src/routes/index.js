const ping = require('./ping');
// const getFormDetails = require('./getFormDetails');
const insertFormContent = require('./insertFormContent');
const getFormContent = require('./getFormContent');
const insertFormFields = require('./insertFormFields');

module.exports = [...ping, ...insertFormContent, ...getFormContent, ...insertFormFields];
