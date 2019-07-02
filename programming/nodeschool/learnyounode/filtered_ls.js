let fs = require('fs');
let path = require('path');

let dirname = process.argv[2];
let extension = '.' + process.argv[3];

fs.readdir(dirname, 'utf8', function (err, list) {
    if (err)
      console.log(err);
    let files = list.filter(dirname => path.extname(dirname) == extension)    
    files.forEach(data => console.log(data));
  });

  