const programs = [
    { 
        name: "Strength Builder", 
        category: "strength", 
        image: "https://via.placeholder.com/300x200?text=Total+Body+Transformation", 
        description: "Boost muscle strength with tailored workouts." ,
        difficulty: 'Advanced',
        duration: '8 weeks',
        rating: 4.8
    },
    { 
        name: "Weight Loss Journey", 
        category: "cardio", 
        image: "https://via.placeholder.com/300x200?text=Powerlifting+Fundamentals", 
        description: "Burn calories and lose weight sustainably." ,
        difficulty: 'Intermediate',
        duration: '10 weeks',
        rating: 4.9
    },
    { 
        name: "Flexibility and Mobility Flow", 
        category: "flexibility", 
        image: "https://via.placeholder.com/300x200?text=Pilates+Core+Challenge", 
        description: "Increase flexibility and mobility with fluid stretches.",
        difficulty: 'Beginner',
        duration: '4 weeks',
        rating: 4.4
    },
    { 
        name: "Lean & Tone", 
        category: "strength", 
        image: "https://via.placeholder.com/300x200?text=HIIT+Cardio+Blast", 
        description: "Shape a lean body with effective toning circuits.",
        difficulty: 'Intermediate',
        duration: '6 weeks',
        rating: 4.5
    },
    { 
        name: "Cardio Burn", 
        category: "cardio", 
        image: "https://via.placeholder.com/300x200?text=Marathon+Prep", 
        description: "Improve heart health and stamina with energizing cardio.",
        difficulty: 'Advanced',
        duration: '6 weeks',
        rating: 4.7 
    },
    { 
        name: "Posture and Balance Reset", 
        category: "flexibility", 
        image: "https://via.placeholder.com/300x200?text=Pilates+Core+Challenge", 
        description: "Realign posture and improve balance for daily life.",
        difficulty: 'Beginner',
        duration: '6 weeks',
        rating: 4.2
    },
    { 
        name: "Core Mastery", 
        category: "strength", 
        image: "https://via.placeholder.com/300x200?text=Yoga+Flow", 
        description: "Strengthen your core with targeted exercises for stability and power.",
        difficulty: 'Intermediate',
        duration: '4 weeks',
        rating: 4.2
        
    },
    { 
        name: "Endurance Enhancer", 
        category: "cardio", 
        image: "https://via.placeholder.com/300x200?text=Pilates+Core+Challenge", 
        description: "Build long-lasting stamina with endurance-focused routines.",
        difficulty: 'Intermediate',
        duration: '8 weeks',
        rating: 4.3
    },
    { 
        name: "Weekend Warrior", 
        category: "flexibility", 
        image: "https://via.placeholder.com/300x200?text=Pilates+Core+Challenge", 
        description: "Maintain fitness and flexibility with quick weekend workouts." ,
        difficulty: 'Beginner',
        duration: '6 weeks',
        rating: 4.0
    }
];

const programsGrid = document.getElementById('programs-grid');
const tabs = document.querySelectorAll('.tab');

function renderPrograms(category = 'all') {
    programsGrid.innerHTML = '';
    programs.forEach(program => {
        if (category === 'all' || program.category === category) {
            const card = document.createElement('div');
            card.className = 'item program-card';
            card.innerHTML = `
                <img src="${program.image}" alt="${program.name}">
                <div id="item-title">${program.name}</div>
                <p id="item-label">${program.description}</p>
                <div class="program-meta">
                    <span><i class="fas fa-chart-line"></i> ${program.difficulty}</span>
                    <span><i class="fas fa-clock"></i> ${program.duration}</span>
                    <span><i class="far fa-star"></i> ${program.rating}</span>
                </div>
                <a href="#" id="moreBtn">Learn More</a>
            `;
            programsGrid.appendChild(card);
        }
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderPrograms(tab.getAttribute('data-category'));
    });
});

// Initial render
renderPrograms();