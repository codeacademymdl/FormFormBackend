const ping = require('./ping');
const getFormDetails = require('./getFormDetails');


module.exports = [...ping, ...getFormDetails];
