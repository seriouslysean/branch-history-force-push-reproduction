const packageJson = require('./package.json');
const semver = packageJson?.version || 'unknown';
console.log(`App version "${semver}"`);
