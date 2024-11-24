// Populate recipes
const recipes = [
    "Protein-Packed Breakfast Bowl",
    "Lean Chicken Stir-Fry",
    "Vegetarian Quinoa Salad",
    "Grilled Fish & Veggies",
    "Greek Yogurt Parfait",
    "Spicy Black Bean Burger",
];

const recipeList = document.getElementById('recipe-list');
recipes.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.className = 'recipe-item item';
    card.innerHTML = `
        <img src="https://via.placeholder.com/300x200?text=Recipe${index + 1}" alt="${recipe}" style="width: 100%; border-radius: 0.5rem; margin-bottom: 0.5rem;">
        <div class="item-title">${recipe}</div>
        <div class="recipe-details row-flex">
            <div class="item-label">Prep time: 15 mins</div>
            <div class="item-label">Calories: 350</div>
        </div>
        <a href="#" class="recipeBtn btn">View Recipe</a>
    `;
    recipeList.appendChild(card);
});