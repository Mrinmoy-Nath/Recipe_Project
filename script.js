const searchBox = document.querySelector('.serachBox');
const searchBtn = document.querySelector('.searchBox');
const recipeContainerx = document.querySelector('.recipe-container')

const fetchRecipes = async (query) => {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${query}');
    const response = await data.json();

    response.meals.for
    //console.log(response.meals[0]);
}

searchBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    const searchInput = searchBox.ariaValueMax.trim();
    fetchRecipes(searchInput);
    console.log("Button Clicked");
});