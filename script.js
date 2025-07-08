// Theme Management
let isDarkMode = false;

// Project data
const cyberProjects = [
    {
        title: "Network Intrusion Detection",
        description: "Advanced ML-based system for detecting network intrusions and anomalies in real-time.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        icon: "fas fa-shield-alt",
        tags: ["Python", "TensorFlow", "Wireshark"],
        demo: "#",
        code: "#"
    },
    {
        title: "Vulnerability Scanner",
        description: "Comprehensive vulnerability assessment tool for web applications and network infrastructure.",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        icon: "fas fa-bug",
        tags: ["C++", "Nmap", "OpenVAS"],
        demo: "#",
        code: "#"
    },
    {
        title: "Encrypted Communication",
        description: "End-to-end encrypted messaging system with quantum-resistant cryptography.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        icon: "fas fa-lock",
        tags: ["Go", "Cryptography", "WebRTC"],
        demo: "#",
        code: "#"
    }
];

const softwareProjects = [
    {
        title: "Business Intelligence Dashboard",
        description: "Interactive dashboard for real-time business analytics and key performance indicators.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        icon: "fas fa-chart-line",
        tags: ["React", "D3.js", "PostgreSQL"],
        demo: "#",
        code: "#"
    },
    {
        title: "ML Prediction Engine",
        description: "Machine learning platform for predictive analytics and automated decision making.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        icon: "fas fa-brain",
        tags: ["Python", "scikit-learn", "Flask"],
        demo: "#",
        code: "#"
    },
    {
        title: "Full-Stack Web App",
        description: "Modern web application with responsive design and cloud deployment.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        icon: "fas fa-code",
        tags: ["Node.js", "Vue.js", "MongoDB"],
        demo: "#",
        code: "#"
    }
];

// Skills data
const cyberSkills = [
    { name: "Network Security", level: 90 },
    { name: "Penetration Testing", level: 85 },
    { name: "Cryptography", level: 88 },
    { name: "Incident Response", level: 82 }
];

const softwareSkills = [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 85 },
    { name: "Machine Learning", level: 90 }
];

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const modeIndicator = document.getElementById('modeIndicator');
const projectsGrid = document.getElementById('projectsGrid');
const primarySkills = document.getElementById('primarySkills');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateContent();
    setupEventListeners();
    animateSkillBars();
});

// Event Listeners
function setupEventListeners() {
    themeToggle.addEventListener('click', toggleTheme);
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Theme Toggle
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    updateContent();
}

// Update Content Based on Theme
function updateContent() {
    // Update mode indicator
    if (isDarkMode) {
        modeIndicator.innerHTML = `
            <i class="fas fa-shield-alt"></i>
            Cybersecurity Mode
        `;
        document.querySelector('.toggle-slider').innerHTML = '<i class="fas fa-shield-alt"></i>';
        updateHeroContent('cybersecurity');
        updateProjects(cyberProjects);
        updateSkills(cyberSkills, 'Cybersecurity');
        updateAboutContent('cybersecurity');
    } else {
        modeIndicator.innerHTML = `
            <i class="fas fa-chart-line"></i>
            Software Projects Mode
        `;
        document.querySelector('.toggle-slider').innerHTML = '<i class="fas fa-chart-line"></i>';
        updateHeroContent('software');
        updateProjects(softwareProjects);
        updateSkills(softwareSkills, 'Software Development');
        updateAboutContent('software');
    }
}

// Update Hero Content
function updateHeroContent(mode) {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDetail = document.querySelector('.hero-detail');
    const sectionDescription = document.querySelector('.about .section-description');
    
    if (mode === 'cybersecurity') {
        heroSubtitle.textContent = 'Cybersecurity Researcher';
        heroDetail.textContent = 'Securing the digital frontier through advanced threat analysis';
        if (sectionDescription) {
            sectionDescription.textContent = 'Passionate about securing digital infrastructure and analyzing complex threat patterns';
        }
    } else {
        heroSubtitle.textContent = 'Data Scientist & Developer';
        heroDetail.textContent = 'Turning data into actionable insights with machine learning';
        if (sectionDescription) {
            sectionDescription.textContent = 'Passionate about extracting insights from data and building innovative software solutions';
        }
    }
}

// Update About Content
function updateAboutContent(mode) {
    const aboutDetail = document.querySelector('.about-text p:last-of-type');
    if (aboutDetail) {
        if (mode === 'cybersecurity') {
            aboutDetail.textContent = 'I develop cutting-edge security solutions to protect against advanced threats and vulnerabilities in complex network environments.';
        } else {
            aboutDetail.textContent = 'I leverage advanced analytics and machine learning to extract meaningful patterns from complex datasets, driving data-driven decision making.';
        }
    }
}

// Update Projects
function updateProjects(projects) {
    projectsGrid.innerHTML = '';
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create Project Card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-content">
            <div class="project-title">
                <i class="${project.icon}"></i>
                ${project.title}
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.demo}" class="btn primary">
                    <i class="fas fa-external-link-alt"></i>
                    Demo
                </a>
                <a href="${project.code}" class="btn secondary">
                    <i class="fab fa-github"></i>
                    Code
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Update Skills
function updateSkills(skills, category) {
    const categoryTitle = document.querySelector('.skills-category h3');
    if (categoryTitle) {
        const icon = isDarkMode ? 'fas fa-shield-alt' : 'fas fa-code';
        categoryTitle.innerHTML = `<i class="${icon}"></i> ${category}`;
    }
    
    primarySkills.innerHTML = '';
    skills.forEach((skill, index) => {
        const skillElement = createSkillElement(skill, index);
        primarySkills.appendChild(skillElement);
    });
    
    // Animate skill bars after a short delay
    setTimeout(() => {
        animateSkillBars();
    }, 100);
}

// Create Skill Element
function createSkillElement(skill, index) {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill-item fade-in';
    skillDiv.style.animationDelay = `${index * 0.1}s`;
    
    skillDiv.innerHTML = `
        <div class="skill-item">
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">${skill.level}%</div>
        </div>
        <div class="skill-bar">
            <div class="skill-progress" data-level="${skill.level}"></div>
        </div>
    `;
    
    return skillDiv;
}

// Animate Skill Bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        }, index * 200);
    });
}

// Utility Functions
function downloadResume() {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // Make sure to add your resume.pdf file
    link.download = 'Your_Name_Resume.pdf';
    link.click();
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Contact Form (basic mailto functionality)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        const mailtoLink = `mailto:your.email@university.edu?subject=Contact from ${name}&body=${message}`;
        window.open(mailtoLink, '_blank');
        
        // Clear form
        this.reset();
        alert('Email client opened! Please send the email from there.');
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('section > div, .project-card, .skill-item, .stat');
    animateElements.forEach(el => observer.observe(el));
});