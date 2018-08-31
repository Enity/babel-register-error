const path = require('path');
const babel = require("@babel/core");

const srcPath = path.resolve('../../src');

const output = babel.transformFileSync(srcPath + '/es6module.js', {
    presets: ["@babel/env"]
})

console.log(output.code);