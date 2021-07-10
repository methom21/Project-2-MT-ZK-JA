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
    heroCard.setAttribute("id", "heroCard")
    let name=document.createElement("h2")
    name.setAttribute("id", "name")
    let description=document.createElement("h3")
    description.setAttribute("id", "description")
    let power=document.createElement("h3")
    power.setAttribute("id", "power")
    let combat=document.createElement("h3")
    combat.setAttribute("id", "combat")
    let durability=document.createElement("h3")
    durability.setAttribute("id", "durability")
    let strength=document.createElement("h3")
    strength.setAttribute("id", "strength")
    let speed=document.createElement("h3")
    speed.setAttribute("id", "speed")
    let intelligence=document.createElement("h3")
    intelligence.setAttribute("id", "intelligence")
    let saveButton=document.createElement("button")
    savebutton.setAttribute("id", "savebutton")
    let heroImg = document.createElement('img')
    heroImg.setAttribute("id", "heroImg")
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

 