const fs = require('fs-extra');

const fileread = (filename) => {
    var contents = JSON.parse(fs.readFileSync(filename.toString()));
    return contents;
 };

addToFile = (toRead, toAdd) => {
    var buff = fs.readFileSync(toRead);
    var data = JSON.parse(buff, (key, value) => {
        return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
    });
    data.push(toAdd);
    console.log(data);
    fs.writeFileSync(toRead, JSON.stringify(data));
    return data;
};


module.exports = {
    fileread,
    addToFile
};