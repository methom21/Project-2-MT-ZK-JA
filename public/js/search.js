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
  };