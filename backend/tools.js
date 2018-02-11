fileread = (filename) => {
    var contents = JSON.parse(fs.readFileSync(filename.toString()));
    return contents;
 }
