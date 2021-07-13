// let searchInput = document.querySelector("#searchInput");
// const searchButton = document.getElementById("searchButton");

// searchButton.addEventListener("click", function () {
//   if (searchInput.value == "") {
//     console.log("I cant let you do that Dave");
//   } else {
//     window.location.replace(`/search/${searchInput.value}`);
//   }
// });

// function run(heroId) {
//   console.log("LINE13: ",heroId);
//   const user_id = sessionStorage.getItem()

//   return window.location.replace(`/search/${heroId}`);

// }

const inputSearch = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const removeHero = document.getElementById("heroJar");

searchButton.addEventListener("click", function () {
  //user input
  let SearchInput = document.getElementById("searchInput").value;
  getHero(SearchInput);
  // removes the children of heroJar to insert new hero search
  while (removeHero.firstChild) {
    removeHero.removeChild(removeHero.lastChild);

    clear();
  }
});
// clears searched input
let clear = () => {
  return (document.getElementById("searchInput").value = "");
};

const getHero = async (heroName) => {
  let response = await fetch(`/api/heros/${heroName}`);
  response = await response.json();
  while (response.name == null) {
    response = alert("Unable To Gather Hero Info");
  }

  const heroJar = document.getElementById("heroJar");
  let heroCard = document.createElement("ul");
  heroCard.setAttribute("id", "heroCard");
  heroCard.setAttribute("class", "w3-rest");
  let name = document.createElement("h2");
  name.setAttribute("id", "name");
  let description = document.createElement('lo');
  description.setAttribute("id", "description");

  let power = document.createElement('lo');
  power.setAttribute("id", "power");

  let combat = document.createElement('lo');
  combat.setAttribute("id", "combat");
  let durability = document.createElement('lo');
  durability.setAttribute("id", "durability");
  let strength = document.createElement('lo');
  strength.setAttribute("id", "strength");
  let speed = document.createElement('lo');
  speed.setAttribute("id", "speed");
  let intelligence = document.createElement('lo');
  intelligence.setAttribute("id", "intelligence");
  let saveButton = document.createElement("button");
  saveButton.setAttribute("class", "saveBtn btn btn-primary search-button");
  let heroImg = document.createElement("img");
  heroImg.setAttribute("id", "heroImg ");
  saveButton.textContent = "save";
  name.textContent = `${response.name}`;
  heroImg.setAttribute("src", response.image.url);
  power.textContent = ` | Power ${response.powerstats.power}`;
  combat.textContent = `| Combat ${response.powerstats.combat}`;
  durability.textContent = `| Durability ${response.powerstats.durability}`;
  strength.textContent = ` | Strength ${response.powerstats.strength}`;
  speed.textContent = ` | Speed ${response.powerstats.speed}`;
  intelligence.textContent = ` | Intelligence ${response.powerstats.intelligence}`;
  description.textContent = ` | Description | Height:${response.appearance.height} | Weight:${response.appearance.weight}`;
  // description.textContent = `Also Known As: ${
  //   response.biography.full - name
  // }\nSimilar Characters: ${response.biography.aliases.map((alias) => alias)}.`;
  heroCard.append(
    name,
    heroImg,
    saveButton,
    power,
    combat,
    durability,
    strength,
    speed,
    intelligence,
    description
  );

  await heroJar.append(heroCard);

  saveButton.addEventListener("click", function () {
    fetch("/api/heros/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${response.name}`,
        image: `${response.image.url}`,
        description: `Description | Height:${response.appearance.height} | Weight:${response.appearance.weight}`,
        power: response.powerstats.power,
        combat: response.powerstats.combat,
        durability: response.powerstats.durability,
        strength: response.powerstats.strength,
        speed: response.powerstats.speed,
        intelligence: response.powerstats.intelligence,
      }),
    });
    // removes the saved hero.
    while (removeHero.firstChild) {
      removeHero.removeChild(removeHero.lastChild);
    }
  });
};
