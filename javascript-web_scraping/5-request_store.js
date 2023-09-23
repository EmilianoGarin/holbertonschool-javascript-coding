#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  // Escribe el contenido en el archivo especificado
  fs.writeFileSync(filePath, body, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
});
