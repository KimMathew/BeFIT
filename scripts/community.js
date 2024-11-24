// Populate recent discussions
const recentDiscussions = [
    "Best Pre-Workout Meals",
    "Overcoming Gym Anxiety",
    "Home vs. Gym Workouts",
    "Importance of Rest Days",
    "Tips on Tracking Macros",
    "Plateaus: Staying Motivated ",
];

const recentDiscussionsContainer = document.getElementById('recent-discussions');
recentDiscussions.forEach((title, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${title}</h3>
        <p>Join the conversation and share your thoughts on this popular topic in the fitness community.</p>
        <div class="discussion-meta between">
            <span>
                <i class="far fa-comment"></i>  ${20 + index * 5} replies
            </span>
            <span>
                <i class="far fa-calendar-alt"></i> ${index + 1} day${index !== 0 ? 's' : ''} ago
            </span>
        </div>
        <a href="#" class="viewBtn btn">View Discussion</a>
    `;
    recentDiscussionsContainer.appendChild(card);
});