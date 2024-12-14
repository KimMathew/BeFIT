// Populate recipes
const recipes = [
    "Protein-Packed Breakfast Bowl",
    "Lean Chicken Stir-Fry",
    "Vegetarian Quinoa Salad",
    "Grilled Fish & Veggies",
    "Greek Yogurt Parfait",
    "Spicy Black Bean Burger",
];

// Corresponding images for recipes
const recipeImages = [
    "../assets/protein-bowl.jpg",
    "../assets/chicken-stirfry.jpg",
    "../assets/quinoa-salad.jpg",
    "../assets/grilled-fish.jpg",
    "../assets/greek-yogurt.jpg",
    "../assets/black-bean-burger.jpg",
];

// Corresponding prep times and calorie values
const recipeDetails = [
    { prepTime: "10 mins", calories: 400 },
    { prepTime: "20 mins", calories: 450 },
    { prepTime: "15 mins", calories: 300 },
    { prepTime: "25 mins", calories: 350 },
    { prepTime: "5 mins", calories: 200 },
    { prepTime: "30 mins", calories: 380 },
];

const recipeList = document.getElementById('recipe-list');
recipes.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.className = 'recipe-item item';
    card.innerHTML = `
        <img id="recipe-img-${index}" src="${recipeImages[index]}" alt="${recipe}" style="width: 100%; border-radius: 0.5rem; margin-bottom: 0.5rem;">
        <div class="item-title">${recipe}</div>
        <div class="recipe-details row-flex">
            <div class="item-label">Prep time: ${recipeDetails[index].prepTime}</div>
            <div class="item-label">Calories: ${recipeDetails[index].calories}</div>
        </div>
        <a href="#" class="recipeBtn btn">View Recipe</a>
    `;
    recipeList.appendChild(card);
});
