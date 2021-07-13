let searchInput = document.querySelector("#searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function () {
  if (searchInput.value == "") {
    console.log("I cant let you do that Dave");
  } else {
    window.location.replace(`/search/${searchInput.value}`);
  }
});

function run(heroId) {
  console.log(heroId);

  return window.location.replace(`/search/${heroId}`);
  console.log(heroId);
  console.log(heroId);
}

//  await function saveButtonRun() {
//     fetch("/api/home/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: `${heros.name}`,
//         image: `${hero.image.url}`,
//         description: `Similar Characters:${response.biography.aliases.map(
//           (alias) => alias
//         )}`,
//         power: heros.powerstats.power,
//         combat: heros.powerstats.combat,
//         durability: heros.powerstats.durability,
//         strength: heros.powerstats.strength,
//         speed: heros.powerstats.speed,
//         intelligence: heros.powerstats.intelligence,
//       }),
//     });
//   };
