#!/usr/bin/node
const request = require('request');

const episodeNumber = process.argv[2]
const apiUrl = `https://swapi-api.hbtn.io/api/films/${episodeNumber}`;

request(apiUrl, (err, response, body) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  const movieData = JSON.parse(body);
  console.log(movieData.title);
});
