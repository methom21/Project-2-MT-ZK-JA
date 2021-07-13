const rosterButton = document.getElementById("rosterButton");

// search db for all cards registered to active user

rosterButton.addEventListener("click", function () {
let rosterResponse = fetch(`/api/roster/user-roster`, {
  method: "GET",
  headers: {"Content-Type": "application/json"},
  body: 'false'
})
let rosterData = JSON.parse(rosterResponse)
buildRoster(rosterData)
console.log('Roster: ',rosterData)
});

function buildRoster(rosterData) {
console.log('Roster FUNCTION: ',rosterData)
  
}


