const inputSearch = document.getElementById('heroSearch')
const searchButton = document.getElementById("button-addon2");

searchButton.addEventListener("click", function () {
    //user input
    let SearchInput = document.getElementById("heroSearch").value;
    getHero(SearchInput);
  });

  const getHero = async (heroName) => {
    let response = await fetch(`/api/heros/${heroName}`);
    response = await response.json()
    console.log(response);


    const heroJar = document.getElementById("heroJar")
    let heroCard = document.createElement("div")
    let name=document.createElement("h2")
    let description=document.createElement("h3")
    let power=document.createElement("h3")
    let combat=document.createElement("h3")
    let durability=document.createElement("h3")
    let strength=document.createElement("h3")
    let speed=document.createElement("h3")
    let intelligence=document.createElement("h3")
    let saveButton=document.createElement("button")
    let heroImg = document.createElement('img')
    name.textContent = `Name: ${response.name}`
    heroImg.setAttribute("src",response.image.url)
    power.textContent = `Power: ${response.powerstats.power}`
    combat.textContent = `Combat: ${response.powerstats.combat}`
    durability.textContent=`Durability: ${response.powerstats.durability}`
    strength.textContent = `Strength: ${response.powerstats.strength}`
    speed.textContent=`Speed: ${response.powerstats.speed}`
    intelligence.textContent=`Intelligence: ${response.powerstats.intelligence}`
    description.textContent=`Also Known As: ${response.biography.aliases.map(alias => alias)}. Alter Ego: ${response.biography.full-name} `
    heroCard.append(name,heroImg,power,combat,durability,strength,speed,intelligence,description,saveButton)
    console.log(`dsasdadsadsadddddddddddddddddddddddd`)
    await heroJar.append(heroCard)
  
    saveButton.addEventListener("click",function() {
    fetch('/api/heros/',{
      method:'POST',
      body:JASON.stringify({	
  name:name.textContent,
  description:description.textContent,
  power:power.textContent,
  combat:combat.textContent,
  durability:durability.textContent,
  strength:strength.textContent,
  speed:speed.textContent,
  intelligence:intelligence.textContent
  })
  .then(res=>console.log(res))
    })
    })
    
  };




//   const getHeroApi = function (hero) {
//     const apiUrl = `https://superheroapi.com/api/${process.env.DB_APIKEY}/search/${hero}`;
//     return fetch(apiUrl)
//       .then(function (response) {
//         if (response.ok) {
//           response.json().then(function (data) {
           
//             return displayHero(data);
//           });
//         } else {
//           alert("Error: " + response.statusText);
//         }
//       })
//       .catch(function (error) {
//         alert("Unable to gather Hero data!");
//       });
//   };

 