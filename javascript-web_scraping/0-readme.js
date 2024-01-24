#!/usr/bin/node
const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
<<<<<<< HEAD
 if (err) {
  console.error(err);
  return;
 } 
 console.log(data);
});
=======
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
>>>>>>> b8070a5 (fixed bug that may result in code not runninfg correctly)
