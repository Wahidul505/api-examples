const searchFood = async () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  if (searchText == '') {
    alert('Please Enter Your Meal');
  }
  else {
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText.toLowerCase()}`;

    const response = await fetch(url);
    const data = await response.json();
    displaySearchResults(data.meals);

    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => displaySearchResults(data.meals))
  }
}
const displaySearchResults = (meals) => {
  if (meals == null) {
    alert('Please, Enter a Valid Meal');
  }
  else {
    const searchResults = document.getElementById('search-results');
    searchResults.textContent = '';
    meals.forEach(meal => {
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
    <div onclick = "loadMealDetails('${meal.idMeal}')" class="col">
    <div class="card h-100">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  `
      searchResults.appendChild(div);
    })
  }
}
const loadMealDetails = async mealId => {
  url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  const res = await fetch(url);
  const data = await res.json();
  displayMealDetails(data.meals[0]);
  // fetch(url)
  //   .then(res => res.json())
  //   .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
  console.log(meal);
  const mealDetails = document.getElementById('meal-details');
  mealDetails.innerHTML = `
  <div class="card bg-dark text-white">
      <img src="${meal.strMealThumb}" class="card-img opacity-50" alt="...">
      <div class="card-img-overlay">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions}</p>
        <a class="p-3 text-decoration-none text-info fw-bold" href="${meal.strYoutube}" target="_blank">Tap To See</a>
      </div>
    </div>
  `
}