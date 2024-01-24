#!/usr/bin/node
const fs = require('fs');

fs.writeFile(process.avrg[2], 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
