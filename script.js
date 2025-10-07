// Theme Management
let isDarkMode = true;

// Project data
const cyberProjects = [
    {
        title: "Poisoning Multimodal Entity Linking Models",
        description: "This project dives into the world of data poisoning attacks in Multimodal Entity Linking (MEL) systems, where attackers inject malicious data to disrupt AI's ability to link entities across text and images. The aim is to understand how these subtle attacks compromise system accuracy and develop effective solutions to keep these AI systems secure and reliable in the real world.",
        image: "MEL.png",
        icon: "fas fa-bug",
        tags: ["Python", "Pytorch"],
        demo:   null,
        code: "https://github.com/malvikajadhav/MEL.git"
    },
    {
        title: "GemmaGuard",
        description: "Comprehensive vulnerability assessment tool for web applications and network infrastructure.",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        icon: "fas fa-shield-alt",
        tags: ["C++", "Nmap", "OpenVAS"],
        demo: "#",
        code: "#"
    },
    {
        title: "Neural Forgetting",
        description: "Teaching machines to forget. This project shows how unlearning can break the link between training data and privacy attacks. Through SISA training and targeted inference tests, we proved that forgetfulness can be engineered — and privacy can be reclaimed.",
        image: "Unlearnt.png",
        icon: "fas fa-bug",
        tags: ["Python", "Jupyter"],
        demo: null,
        code: "https://github.com/malvikajadhav/Neural-Forgetting.git"
    },
    // {
    //     title: "Poisoning Multimodal Entity Linking Models",
    //     description: "This project investigates how data poisoning attacks—where adversaries inject malicious samples into training data—compromise the accuracy and robustness of Multimodal Entity Linking (MEL) systems that align entities across text, image, and video modalities.",
    //     image: "MEL.png",
    //     icon: "fas fa-bug",
    //     tags: ["Python", "Pytorch"],
    //     demo: "https://github.com/malvikajadhav/MEL.git",
    //     code: "https://github.com/malvikajadhav/MEL.git"
    // }
];

const softwareProjects = [
    {
        title: " P2P File Sharing System",
        description: "A distributed peer-to-peer file sharing protocol in Python, simulating BitTorrent behavior with custom TCP messaging, chunk-based file transfer, and adaptive choking/unchoking. Supports multi-host deployment, concurrency, and real-time logging across peers.",
        image: "P2P.png",
        icon: "fas fa-server",
        tags: ["Python"],
        demo: null,
        code: "https://github.com/malvikajadhav/P2P-file-sharing.git"
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
        title: "Neural Forgetting",
        description: "Teaching machines to forget. This project shows how unlearning can break the link between training data and privacy attacks. Through SISA training and targeted inference tests, we proved that forgetfulness can be engineered — and privacy can be reclaimed.",
        image: "Unlearnt.png",
        icon: "fas fa-bug",
        tags: ["Python", "Jupyter"],
        demo: null,
        code: "https://github.com/malvikajadhav/Neural-Forgetting.git"
    }
];

// Skills data
const cyberSkills = [
    { name: "Wireshark", icon: "fas fa-network-wired" },
    { name: "Nmap", icon: "fas fa-search" },
    { name: "Metasploit", icon: "fas fa-shield-alt" },
    { name: "Python", icon: "fab fa-python" },
    { name: "Network Security", icon: "fas fa-shield-alt" }
];
const softwareSkills = [
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Python", icon: "fab fa-python" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "PostgreSQL", icon: "fas fa-database" }
];

// Updates data
const cyberUpdates = [
    {
        date: "May 2025",
        title: "Published Research Paper",
        description: "Co-authored paper on 'Inference Attacks for X-Vector Speaker Anonymization' accepted at IEEE Security and Privacy Conference Workshops.",
        icon: "fas fa-file-alt",
        link: "https://ieeexplore.ieee.org/abstract/document/11050814",
        isNew: true
    },
    {
        date: "May 2025",
        title: "Served on the Artifacts Evaluation Committee for USENIX Symposium on Operating Systems Design and Implementation 2025",
        description:"",
        icon: "fas fa-book",
        link: null,
        isNew: false
    },
    {
        date: "September 2024",
        title: "Served on the Artifacts Committee for EuroSys 2025 (AE Spring)",
        description:"",
        icon: "fas fa-book",
        link: null,
        isNew: false
    },
    {
        date: "May 2023",
        title: "Got my Masters Degree!!!",
        description: "Graduated with my Master's degree in Computer Science from the University of Florida.",
        icon: "fas fa-graduation-cap",
        link: "https://www.linkedin.com/posts/malvika-jadhav_innovation-cybersecurity-tech-activity-7077730125684899840-9gnv?utm_source=share&utm_medium=member_desktop&rcm=ACoAABTxb9wBrhoN6UxStACWkXLHjuhf0mmr9Pc",
        isNew: false
    }
    
    // {
    //     date: "September 2024",
    //     title: "Bug Bounty Recognition",
    //     description: "Received recognition for critical vulnerability discovery in major enterprise software.",
    //     icon: "fas fa-trophy",
    //     link: "#",
    //     isNew: false
    // },
    // {
    //     date: "August 2024",
    //     title: "Security Certification",
    //     description: "Completed advanced penetration testing certification (OSCP).",
    //     icon: "fas fa-certificate",
    //     link: "#",
    //     isNew: false
    // }
];

const softwareUpdates = [
    {
        date: "May 2025",
        title: "Published Research Paper",
        description: "Co-authored paper on 'Inference Attacks for X-Vector Speaker Anonymization' accepted at IEEE Security and Privacy Conference Workshops.",
        icon: "fas fa-file-alt",
        link: "https://ieeexplore.ieee.org/abstract/document/11050814",
        isNew: true
    },
    {
        date: "May 2025",
        title: "Served on the Artifacts Evaluation Committee for USENIX Symposium on Operating Systems Design and Implementation 2025",
        description:"",
        icon: "fas fa-book",
        link: null,
        isNew: false
    },
     {
        date: "September 2024",
        title: "Served on the Artifacts Committee for EuroSys 2025 (AE Spring)",
        description:"",
        icon: "fas fa-book",
        link: null,
        isNew: false
    },
    {
        date: "May 2023",
        title: "Got my Masters Degree!!!",
        description: "Graduated with my Master's degree in Computer Science from the University of Florida.",
        icon: "fas fa-graduation-cap",
        link: "https://www.linkedin.com/posts/malvika-jadhav_innovation-cybersecurity-tech-activity-7077730125684899840-9gnv?utm_source=share&utm_medium=member_desktop&rcm=ACoAABTxb9wBrhoN6UxStACWkXLHjuhf0mmr9Pc",
        isNew: false
    },
    // {
    //     date: "October 2024",
    //     title: "Full-Stack Application Launch",
    //     description: "Launched data visualization platform serving 1000+ daily users.",
    //     icon: "fas fa-rocket",
    //     link: "#",
    //     isNew: false
    // },
    // {
    //     date: "September 2024",
    //     title: "Technical Blog Post",
    //     description: "Published comprehensive guide on modern React patterns, viewed 10K+ times.",
    //     icon: "fas fa-blog",
    //     link: "#",
    //     isNew: false
    // },
    // {
    //     date: "August 2024",
    //     title: "Hackathon Victory",
    //     description: "Won first place at university hackathon with AI-powered analytics tool.",
    //     icon: "fas fa-code",
    //     link: "#",
    //     isNew: false
    // }
];

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const modeIndicator = document.getElementById('modeIndicator');
const projectsGrid = document.getElementById('projectsGrid');
const primarySkills = document.getElementById('primarySkills');
const updatesTimeline = document.getElementById('updatesTimeline');

// Terminal animation data
const terminalCommands = {
    cybersecurity: {
        command: "whoami",
        output: [
            '<span class="name">Malvika Jadhav</span> — <span class="role">Cybersecurity Researcher 🔐</span>',
            '<span class="description">From Code to Consequence | Researching the Societal Risks of AI</span>',
            '<span class="description">Currently pursuing a PhD in Cybersecurity with a focus LLM security, adversarial model behavior, and stalkerware threat detection.</span>'
        ]
    },
    software: {
        command: "cat about.txt",
        output: [
            '<span class="name">Malvika Jadhav</span> — <span class="role">Secure AI Developer ⚙️</span>',
            '<span class="description">From Code to Consequence | Researching the Societal Risks of AI</span>',
            '<span class="description">Currently pursuing a PhD in Cybersecurity, with a data-driven focus on LLM risk analysis and stalkerware behavior modeling.</span>'
        ]
    }
};

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
        updateProjects(cyberProjects);
        updateSkills(cyberSkills, 'Cybersecurity');
        updateUpdates(cyberUpdates);
    } else {
        modeIndicator.innerHTML = `
            <i class="fas fa-chart-line"></i>
            Software Projects Mode
        `;
        document.querySelector('.toggle-slider').innerHTML = '<i class="fas fa-chart-line"></i>';
        updateProjects(softwareProjects);
        updateSkills(softwareSkills, 'Software Development');
        updateUpdates(softwareUpdates);
    }
    
    // Start terminal animation after all content is updated
    startTerminalAnimation();
}

// Update Hero Content - removed since terminal animation is now handled in updateContent

// Update About Content (no longer used since we removed hero-detail)
function updateAboutContent(mode) {
    // This function is no longer needed since we removed the hero-detail element
    // Terminal animation handles the content display now
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
            <div class="project-links">
                ${project.demo ? `<a href="${project.demo}" class="btn primary">
                    <i class="fas fa-external-link-alt"></i>
                    Demo
                </a>` : '<div class="btn-placeholder"></div>'}
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
function updateSkills(skills) {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = '';
    
    skills.forEach(skill => {
        const skillBadge = document.createElement('div');
        skillBadge.className = 'skill-badge';
        skillBadge.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        `;
        skillsGrid.appendChild(skillBadge);
    });
}

// Update Updates
function updateUpdates(updates) {
    updatesTimeline.innerHTML = '';
    updates.forEach(update => {
        const updateElement = createUpdateElement(update);
        updatesTimeline.appendChild(updateElement);
    });
}

// Create Update Element
function createUpdateElement(update) {
    const updateDiv = document.createElement('div');
    updateDiv.className = `update-item ${update.isNew ? 'update-new' : ''}`;

    updateDiv.innerHTML = `
        <div class="update-content">
            <div class="update-date">
                <i class="fas fa-calendar"></i>
                ${update.date}
            </div>
            <div class="update-title">
                <i class="${update.icon}"></i>
                ${update.title}
            </div>
            <p class="update-description">${update.description}</p>
            ${update.link && update.link !== '#' ? `<a href="${update.link}" class="update-link">
                Learn More
                <i class="fas fa-arrow-right"></i>
            </a>` : ''}
        </div>
    `;
    
    return updateDiv;
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
    link.href = 'Malvika_Resume.pdf'; // Make sure to add your resume.pdf file
    link.download = 'Malvika_Resume.pdf';
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

// Terminal Animation
function startTerminalAnimation() {
    const terminalCommand = document.getElementById('terminalCommand');
    const terminalOutput = document.getElementById('terminalOutput');
    const terminalCursor = document.querySelector('.terminal-cursor');
    
    if (!terminalCommand || !terminalOutput) return;
    
    // Clear previous content
    terminalCommand.textContent = '';
    terminalOutput.innerHTML = '';
    
    // Get current mode data
    const mode = isDarkMode ? 'cybersecurity' : 'software';
    const data = terminalCommands[mode];
    
    // Type command
    typeText(terminalCommand, data.command, 100, () => {
        // Hide cursor temporarily
        terminalCursor.style.display = 'none';
        
        // Show output after command is typed
        setTimeout(() => {
            data.output.forEach((line, index) => {
                setTimeout(() => {
                    const outputLine = document.createElement('div');
                    outputLine.className = 'output-line';
                    outputLine.innerHTML = line;
                    terminalOutput.appendChild(outputLine);
                    
                    // Show cursor again after last line
                    if (index === data.output.length - 1) {
                        setTimeout(() => {
                            terminalCursor.style.display = 'inline';
                        }, 500);
                    }
                }, index * 800);
            });
        }, 500);
    });
}

function typeText(element, text, speed, callback) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, speed);
}

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('section > div, .project-card, .skill-item, .stat');
    animateElements.forEach(el => observer.observe(el));
});
