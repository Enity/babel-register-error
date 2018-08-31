require("@babel/register");
const path = require('path');

const srcPath = path.resolve('../../src');

require(srcPath + '/es6module.js'); // ERROR