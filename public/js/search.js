let searchInput = document.querySelector("#searchInput");
let searchButton = document.querySelector('.search-button')
const removeResults = document.getElementById("searchResults");
// const Handlebars = require('express-handlebars');

const getCharacter = async (searchInput) => {
    searchInput  = searchInput.value
    // console.log("searchInput: ",searchInput)
    let response = await fetch(`/api/heros/${searchInput}`);
    response = await response.json();
    
    // buildSearches(response);
    console.log("response: ",response)
}

// const saveButton = async () => {
// fetch("/api/heros/", {method: "POST",headers: { "Content-Type": "application/json" },body: JSON.stringify
// ({
// name: `${response.name}`,
// description: `Also Known As: ${
//   response.biography.full - name
// }\nSimilar Characters: ${response.biography.aliases.map(
//   (alias) => alias
// )}.`,
// power: response.powerstats.power,
// combat: response.powerstats.combat,
// durability: response.powerstats.durability,
// strength: response.powerstats.strength,
// speed: response.powerstats.speed,
// intelligence: response.powerstats.intelligence,
// }),
// });
// }

// function buildSearches(response) {
//     const cardTemplate = document.getElementById('cardTemplate').innerHTML;
//     const compileTemplate = Handlebars.compile(cardTemplate);
//     let buildHTML = compileTemplate(response);
//     let cardContainer = document.getElementById('searchResults');
//     cardContainer.innerHTML = buildHTML;
// }


searchButton.addEventListener('click', function () 
{if (searchInput.value == "") {console.log("I cant let you do that Dave")}
else{getCharacter(searchInput);
while (removeResults.firstChild) {
removeResults.removeChild(removeResults.lastChild);}}
})

