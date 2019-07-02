let fs = require('fs');
let file = process.argv[2];

fs.readFile(file,'utf8', function (err, contents) {
  if (err) {
    return console.log(err);
  };

  let lines = contents.split('\n').length - 1;
  console.log(lines);
});