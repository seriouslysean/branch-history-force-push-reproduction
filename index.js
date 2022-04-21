const packageJson = require('./package.json');
const semver = packageJson?.version || 'unknown';

function getDMY() {
    const date = new Date();
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    return `${month}/${day}/${year}`;
}

console.log(`MBH@${getDMY()} App version "${semver}"`);
