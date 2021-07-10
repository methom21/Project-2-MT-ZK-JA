const inputSearch = document.getElementById('heroSearch')
const searchButton = document.getElementById("button-addon2");

const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert(response.statusText);
  }
};

function displayHero(HeroData) {
  let iconId = heroData.weather[0].icon;
  let iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  let iconEl = $("<img>").attr("alt", "weatherIcon").attr("src", iconUrl);
  $("#weatherIcon").append(iconEl);
  $("#cityName").text(heroData.name);
  $("#tempDisplay").text(heroData.main.feels_like);
  $("#windDisplay").text(heroData.wind.speed);

  $("#humidDisplay").text(heroData.main.humidity);
}

const getHero = async (heroName) => {
  let response = await fetch(`/api/heros/${heroName}`);
  response = await response.json()
  console.log(response);
};
// user inputs hero. 
searchButton.addEventListener("click", function () {
  //user input
  let SearchInput = document.getElementById("heroSearch").value;
  getHero(SearchInput);
});

document.querySelector("#logout").addEventListener("click", logout);
