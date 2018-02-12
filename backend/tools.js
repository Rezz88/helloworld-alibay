const fs = require('fs-extra');

const fileread = (filename) => {
    var contents = JSON.parse(fs.readFileSync(filename));
    return contents;
 };

addToFile = (toRead, toAdd) => {
    var buff = fs.readFileSync(toRead);
    var data = JSON.parse(buff, (key, value) => {
        return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
    });
    data.push(toAdd);
    fs.writeFileSync(toRead, JSON.stringify(data));
    // changed to only display the current user that signed up
    return toAdd;
};

 genPID = () => {
    return Math.floor(Math.random() * 100000000)
}



module.exports = {
    fileread,
    addToFile,
    genPID
};