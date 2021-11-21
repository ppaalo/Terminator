const fs = require('fs');

module.exports = (path, options) => fs.readdirSync(path).filter(options.filter);