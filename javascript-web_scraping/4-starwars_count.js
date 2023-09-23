#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (err, response, body) => {
  if (err) {
    console.log(err);
  }

  const filmsData = JSON.parse(body).results; // Obtiene los datos de las películas
  const characterId = '18'; // ID del personaje "Wedge Antilles"

  // Filtra las películas en las que aparece el personaje
  const moviesWithCharacter = filmsData.filter((film) =>
    film.characters.some((character) => character.includes(`people/${characterId}/`))
  );

  // Imprime el número de películas en las que aparece "Wedge Antilles"
  console.log(moviesWithCharacter.length);
});
