const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const textElement = document.querySelector(".scramble-text");
const preloader = document.querySelector(".preloader");

let iterations = 0;

const interval = setInterval(() => {
    // It changes the text to random letters
    textElement.innerText = textElement.innerText
        .split("")
        .map((letter, index) => {
            if(index < iterations) {
                return "JayyTee"[index];    
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

    if(iterations >= "JayyTee".length) {
        clearInterval(interval);
        // To remove the preloader after the animation is done
        setTimeout(() => {
            preloader.classList.add("fade-out");
        }, 500);
    }
    
    iterations += 1 / 3;
}, 50);

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// So that the theme persists even after page reload
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- 3. PROJECTS DATA & RENDERING ---
const projects = [
    {
        title: "Haven AI & The Marketing Haven",
        description: "The Marketing Haven is a digital marketing agency platform. I architected and built Haven AI, a production-grade AI brand diagnostician that filters leads and routes them to the correct solution. Features a secure multi tenant edge function backend, a custom RAG system, automated AI budget controls, and server side guardrails to prevent hallucinations.",
        tech: ["React", "Supabase", "PostgreSQL", "RAG System", "LLM Integration"],
        link: "https://themarketinghaven.xyz"
    }
];

const projectsContainer = document.getElementById('projects-container');

const renderProjects = () => {
    projectsContainer.innerHTML = projects.map(project => `
        <div class="project-card glass-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-tags">
                ${project.tech.map(t => `<span>${t}</span>`).join('')}
            </div>
            <div class="project-links">
                <!-- Custom Button -->
                <a href="${project.link}" target="_blank" class="project-btn">View Live Site <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
    `).join('');
};

renderProjects();

// --- 4. IMAGE LIGHTBOX ---
const heroImg = document.querySelector('.hero-img');
const modal = document.getElementById('image-modal');
const closeModal = document.querySelector('.close-modal');

// When image is clicked, show modal
heroImg.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// When X is clicked, hide modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// When clicking anywhere on the background, hide modal
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});