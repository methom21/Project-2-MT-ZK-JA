// const router = require('express').Router();
// const { User } = require('../../models');

const getHero = function (hero) {
    const name = name.trim()
    const apiUrl = `https://superheroapi.com/api/4085762414794326/search/${hero}`;
    return fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
           
            return displayHero(data);
          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
      .catch(function (error) {
        alert("Unable to gather Hero data!");
      });



module.exports = router;