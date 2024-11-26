const tabs = document.querySelectorAll('.tab');
const programCards = document.querySelectorAll('.program-card');

function filterPrograms(category) {
    programCards.forEach(card => {
        // Check if the card matches the selected category
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block'; // Show matching cards
        } else {
            card.style.display = 'none'; // Hide non-matching cards
        }
    });
}

// Add click event listeners to tabs
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active')); // Remove active class from all tabs
        tab.classList.add('active'); // Add active class to the clicked tab
        const selectedCategory = tab.getAttribute('data-category');
        filterPrograms(selectedCategory); // Filter programs by the selected category
    });
});

// Initial render: show all programs
filterPrograms('all');
