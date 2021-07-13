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
  let heroCard = document.createElement("div");
  heroCard.setAttribute("id", "heroCard");
  let name = document.createElement("h2");
  name.setAttribute("id", "name");
  let description = document.createElement("p");
  description.setAttribute("id", "description");
  let power = document.createElement("p");
  power.setAttribute("id", "power");
  let combat = document.createElement("p");
  combat.setAttribute("id", "combat");
  let durability = document.createElement("p");
  durability.setAttribute("id", "durability");
  let strength = document.createElement("p");
  strength.setAttribute("id", "strength");
  let speed = document.createElement("p");
  speed.setAttribute("id", "speed");
  let intelligence = document.createElement("p");
  intelligence.setAttribute("id", "intelligence");
  let saveButton = document.createElement("button");
  saveButton.setAttribute("class", "saveBtn");
  let heroImg = document.createElement("img");
  heroImg.setAttribute("id", "heroImg");
  name.textContent = `${response.name}`;
  heroImg.setAttribute("src", response.image.url);
  power.textContent = `Power: ${response.powerstats.power}`;
  combat.textContent = `Combat: ${response.powerstats.combat}`;
  durability.textContent = `Durability: ${response.powerstats.durability}`;
  strength.textContent = `Strength: ${response.powerstats.strength}`;
  speed.textContent = `Speed: ${response.powerstats.speed}`;
  intelligence.textContent = `Intelligence: ${response.powerstats.intelligence}`;
  description.textContent = `Description | Height:${response.appearance.height} | Weight:${response.appearance.weight}`;
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
    description,
  );

  await heroJar.append(heroCard);

  saveButton.addEventListener("click", function () {
    fetch("/api/heros/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${response.name}`,
        image: `${response.image.url}`,
        description:`Description | Height:${response.appearance.height} | Weight:${response.appearance.weight}`,
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
