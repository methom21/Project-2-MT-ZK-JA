// const {response} = require("express");

let searchInput = document.querySelector("#searchInput");
let searchButton = document.querySelector('.search-button')
const removeResults = document.getElementById("searchResults");
// const Handlebars = require('express-handlebars');

const getCharacter = async (searchInput) => {
    searchInput  = searchInput.value
    let response = await fetch(`/api/heros/${searchInput}`);
    response = await response.json();
    
    console.log("response: ",response)
}

let saveButtonRun = async () => {
fetch("/api/heros/", {method: "POST",headers: { "Content-Type": "application/json" },body: JSON.stringify
({
name: `${response.name}`,
image:`${response.image.url}`,
description: `Similar Characters:${response.biography.aliases.map((alias)=>alias)}`,
power: response.powerstats.power,
combat: response.powerstats.combat,
durability: response.powerstats.durability,
strength: response.powerstats.strength,
speed: response.powerstats.speed,
intelligence: response.powerstats.intelligence,
}),
});
}


searchButton.addEventListener('click', function () 
{if (searchInput.value == "") {console.log("I cant let you do that Dave")}
else{getCharacter(searchInput);
while (removeResults.firstChild) {
removeResults.removeChild(removeResults.lastChild);}}
})

