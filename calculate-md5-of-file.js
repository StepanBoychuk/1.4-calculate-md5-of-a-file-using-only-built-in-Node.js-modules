const crypto = require('crypto');
const fs = require('fs');

const calculateMD5Hash = (fileName) => {
    return new Promise((resolve, reject) => {
      const hash = crypto.createHash('md5');
      const stream = fs.createReadStream(fileName);
      stream.on('error', err => reject(err));
      stream.on('data', chunk => hash.update(chunk));
      stream.on('end', () => resolve(hash.digest('hex')));
    });
  }

calculateMD5Hash(process.argv[2]);