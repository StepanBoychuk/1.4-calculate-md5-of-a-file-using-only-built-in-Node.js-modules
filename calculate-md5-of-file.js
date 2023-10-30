const crypto = require('crypto');
const fs = require('fs');

const stream = fs.createReadStream(process.argv[2]);
const hash = crypto.createHash('md5').setEncoding('hex');

stream.pipe(hash);
stream.on('error', error => console.error(error));
stream.on('end', () => console.log(hash.read()));