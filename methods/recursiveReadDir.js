const fs = require('fs'), path = require('path'), files = [],
	ignore = fs.readFileSync('./.gitignore', { encoding: 'utf-8' }).trim().split('\n');

module.exports = function recursiveReadDir(directory) {
	try {
		fs.readdirSync(directory).forEach(file => {
			const absolute = path.join(directory, file);
			if (ignore.includes(absolute) || absolute.match(/^[.]/)) return;

			if (fs.statSync(absolute).isDirectory())
				return recursiveReadDir(absolute);

			return files.push(absolute);
		});
		return files;
	} catch (error) { null; }
};