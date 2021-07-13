
const saveHero = document.querySelector(".saveBtn");
let searchInput = document.querySelector("#searchInput");






searchButton.addEventListener("click", function () {
  if (searchInput.value == "") {
    console.log("I cant let you do that Dave");
  } else {
    window.location.replace(`/search/${searchInput.value}`);
  }
});

function run(heroId){
  console.log(heroId)
 
  if (heroId.value == "") {
    console.log("I cant let you do that Dave");
  } else {
    fetch(`/api/heros/${heroId}`,  {"method": "GET"})
    // window.location.replace(`/search/${heroId.value}`);
  }
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





