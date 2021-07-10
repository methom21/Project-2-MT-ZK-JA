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

    const heroJar=document.getElementById("#heroJar")
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
    name.textContent=response.name
    power.textContent=response.powerstats.power
    combat.textContent=response.powerstats.combat
    durability.textContent=response.powerstats.durability
    strength.textContent=response.powerstats.strength
    speed.textContent=response.powerstats.speed
    intelligence.textContent=response.powerstats.intelligence
    description.textContent=`Also Known As: ${response.aliases.map(alias => alias)}. Alter Ego: ${response.biography.full-name} `
    heroCard.append(name,power,combat,durability,strength,speed,intelligence,description,saveButton)
    heroJar.append(heroCard)

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

