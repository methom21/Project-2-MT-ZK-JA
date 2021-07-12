const homeSaveButton = document.getElementById("homeSaveButton");

let featured = {
    featured:[{
    'name': `Place Holder`,
    'full_name':`Holder of Places`,
    'power': 100,
    'combat': 0,
    'durability': 100,
    'strength': 0,
    'speed': 0,
    'intelligence': 0,}
]}



const saveButton = async () => {
    fetch("/api/heros/", {method: "POST",headers: { "Content-Type": "application/json" },body: JSON.stringify
    ({
    name: `${featured[0].name}`,
    description: `Also Known As: ${featured[0].full_name}`,
    power: featured[0].power,
    combat: featured[0].combat,
    durability: featured[0].durability,
    strength: featured[0].strength,
    speed: featured[0].speed,
    intelligence: featured[0].intelligence,
    }),
    });
    }

homeSaveButton.addEventListener('click', saveButton)