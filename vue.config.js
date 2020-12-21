const {merge} = require('webpack-merge');
const base = require('./config/config.base');
const configDev = require('./config/config.dev');

const config = () =>{
    return merge(base, configDev);
}

module.exports = config();