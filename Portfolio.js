const typingElement = document.getElementById("typing-text");
const phrases = 
[
    "Front-End Developer ",
    "Software Engineer  ",
    "Turning Ideas into Reality ",
    "Ambitious, Curious & Unstoppable "
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;
function typeText() 
{
    let currentPhrase = phrases[phraseIndex];
    if (isDeleting) 
    {
        typingElement.textContent = currentPhrase.substring(0, charIndex);
        charIndex--;
        typingSpeed = 40;
    } 
    else 
    {
        typingElement.textContent = currentPhrase.substring(0, charIndex);
        charIndex++;
        typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) 
    {
        typingSpeed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) 
    {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 400;
    }

    setTimeout(typeText, typingSpeed);
}
typeText();

const toggle = document.getElementById("theme-toggle");
if (localStorage.getItem("theme") === "dark") 
{
    document.body.classList.add("dark");
}

toggle.onclick = () => 
{
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) 
    {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};

const projects = [
    {
        title: "StudySync - Smart Study Planner",
        category: "desktop",
        desc: "An intelligent study planner that helps students organize tasks, set deadlines and track progress with a clean dashboard.",
        tech: ["C++", "CSS", "JavaScript"],
        image: "images/study.jpg",
        link: "https://github.com/maishanazifa9/Web-Tech-S-Maisha"
    },
    {
        title: "QuickBite - Food Ordering System",
        category: "web",
        desc: "A modern food ordering interface with menu browsing, search, filtering and a dynamic cart system.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "images/food.jpg",
        link: "https://github.com/maishanazifa9/Web-Tech-S-Maisha"
    },    
    {
        title: "BudgetBuddy - Expense Tracker",
        category: "app",
        desc: "A simple expense tracking app that allows users to manage income, expenses and visualize spending habits.",
        tech: ["JavaScript", "Database", "HTML", "CSS"],
        image: "images/expense.jpg",
        link: "https://github.com/maishanazifa9/Web-Tech-S-Maisha"
    },
    {
        title: "TaskFlow - Productivity Manager",
        category: "web",
        desc: "A task management system with drag-and-drop features, priority tagging, and real-time progress tracking.",
        tech: ["JavaScript", "HTML", "CSS"],
        image: "images/productivity.jpg",
        link: "https://github.com/maishanazifa9/Web-Tech-S-Maisha"
    }
];

function displayProjects(list) 
{
    const container = document.getElementById("project-container");
    container.innerHTML = "";
    list.forEach(p => 
    {
        const card = document.createElement("div");
        card.classList.add("card");
        let techTags = p.tech.map(t => `<span>${t}</span>`).join("");
        card.innerHTML = `
            <img src="${p.image}" alt="${p.title}" class="project-img">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="tags">${techTags}</div>
            <a href="${p.link}" target="_blank">View Project →</a>
        `;
        container.appendChild(card);
    });
}
displayProjects(projects);

function filterProjects(category) 
{
    if (category === "all") 
    {
        displayProjects(projects);
    } 
    else 
    {
        const filtered = projects.filter(p => p.category === category);
        displayProjects(filtered);
    }
}

document.getElementById("contact-form").addEventListener("submit", function(e) 
{
    e.preventDefault();
    let valid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const inputs = [name, email, subject, message];
    inputs.forEach(input => 
    {
        const error = input.nextElementSibling;
        if (input.value.trim() === "") 
        {
            error.textContent = "This field is required";
            valid = false;
        } 
        else 
        {
            error.textContent = "";
        }
    });
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) 
    {
        email.nextElementSibling.textContent = "Enter a valid email";
        valid = false;
    }

    if (valid) 
    {
        alert("Form submitted successfully!");
        document.getElementById("contact-form").reset();
    }
});

const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => 
{
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } 
    else 
    {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.onclick = () => 
{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

let heroIndex = 0;
const heroTitle = document.getElementById("hero-title");
const heroDesc = document.getElementById("hero-desc");
const heroImage = document.getElementById("hero-image");
function updateHero() 
{
    if (!heroImage) return; 
    heroImage.classList.add("fade-out");
    setTimeout(() => 
    {
        const project = projects[heroIndex];
        heroTitle.textContent = project.title;
        heroDesc.textContent = project.desc;
        heroImage.src = project.image;
        heroImage.alt = project.title;
        heroImage.classList.remove("fade-out");
        heroIndex = (heroIndex + 1) % projects.length;
    }, 400);
}

if (heroImage) 
{
    updateHero();
    setInterval(updateHero, 3000);
}