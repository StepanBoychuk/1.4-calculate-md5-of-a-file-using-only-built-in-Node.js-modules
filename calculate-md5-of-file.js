const crypto = require('crypto');
const fs = require('fs');

const calculateMD5Hash = (filePath) => {
    return new Promise((resolve, reject) => {
        const stream = fs.createReadStream(filePath);
        const hash = crypto.createHash('md5');
        hash.setEncoding('hex');
        stream.pipe(hash);
        stream.on('error', error => reject(error));
        stream.on('end', () => resolve(hash.read()));
    })
}

calculateMD5Hash(process.argv[2])