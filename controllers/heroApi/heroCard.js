const heroSearch = document.getElementById("#heroSearch")


// function heroSearch(input) {
    
// }

const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: { 'Content-Type': 'application/json' },
  });


  heroSearch.addEventListener("submit", heroSearch(input))