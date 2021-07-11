const inputSearch = document.getElementById("heroSearch");
const searchButton = document.getElementById("button-addon2");
const removeHero = document.getElementById("heroJar");

searchButton.addEventListener("click", function () {
  //user input
  let SearchInput = document.getElementById("heroSearch").value;
  getHero(SearchInput);
  // removes the children of heroJar to insert new hero search
  while (removeHero.firstChild) {
    removeHero.removeChild(removeHero.lastChild);

    clear();
  }
});
// clears searched input
let clear = () => {
  return (document.getElementById("heroSearch").value = "");
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
  let description = document.createElement("h3");
  description.setAttribute("id", "description");
  let power = document.createElement("h3");
  power.setAttribute("id", "power");
  let combat = document.createElement("h3");
  combat.setAttribute("id", "combat");
  let durability = document.createElement("h3");
  durability.setAttribute("id", "durability");
  let strength = document.createElement("h3");
  strength.setAttribute("id", "strength");
  let speed = document.createElement("h3");
  speed.setAttribute("id", "speed");
  let intelligence = document.createElement("h3");
  intelligence.setAttribute("id", "intelligence");
  let saveButton = document.createElement("button");
  saveButton.setAttribute("class", "saveBtn");
  let heroImg = document.createElement("img");
  heroImg.setAttribute("id", "heroImg");
  name.textContent = `Name: ${response.name}`;
  heroImg.setAttribute("src", response.image.url);
  power.textContent = `Power: ${response.powerstats.power}`;
  combat.textContent = `Combat: ${response.powerstats.combat}`;
  durability.textContent = `Durability: ${response.powerstats.durability}`;
  strength.textContent = `Strength: ${response.powerstats.strength}`;
  speed.textContent = `Speed: ${response.powerstats.speed}`;
  intelligence.textContent = `Intelligence: ${response.powerstats.intelligence}`;
  description.textContent = `Also Known As: ${
    response.biography.full - name
  }\nSimilar Characters: ${response.biography.aliases.map((alias) => alias)}.`;
  heroCard.append(
    name,
    heroImg,
    power,
    combat,
    durability,
    strength,
    speed,
    intelligence,
    description,
    saveButton
  );

  await heroJar.append(heroCard);

  saveButton.addEventListener("click", function () {
    fetch("/api/heros/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${response.name}`,
        description: `Also Known As: ${
          response.biography.full - name
        }\nSimilar Characters: ${response.biography.aliases.map(
          (alias) => alias
        )}.`,
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
