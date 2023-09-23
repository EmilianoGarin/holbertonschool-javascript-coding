#!/usr/bin/node
const fs = require('fs');

const fileName = process.argv[2];
const newText = process.argv[3]

fs.writeFile(fileName, newText, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});
