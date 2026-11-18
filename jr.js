// =====================================
// 1. BRAND LINK / HOME NAVIGATION
// =====================================

const brandLink = document.querySelector('.brand');

if (brandLink) {
    brandLink.addEventListener('click', (event) => {
        const homeSection = document.getElementById('home');

        if (homeSection) {
            event.preventDefault();
            homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', '#home');
        }
    });
}

// =====================================
// 2. MOBILE NAVIGATION MENU
// =====================================

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {

    const isOpen = nav.classList.toggle('open');

    menuButton.setAttribute(
        'aria-expanded',
        String(isOpen)
    );

    menuButton.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation' : 'Open navigation'
    );

    menuButton.textContent = isOpen ? '×' : '☰';

});


// =====================================
// 2. CLOSE MENU AFTER CLICKING A LINK
// =====================================

nav.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

        nav.classList.remove('open');

        menuButton.setAttribute(
            'aria-expanded',
            'false'
        );

        menuButton.setAttribute(
            'aria-label',
            'Open navigation'
        );

        menuButton.textContent = '☰';

    });

});


// =====================================
// 3. SKILL IMAGE CLICK TOGGLE
// =====================================

const skillButtons = document.querySelectorAll('.skill-button');

if (skillButtons.length) {
    skillButtons.forEach((button) => {
        button.addEventListener('pointerdown', (event) => {
            event.preventDefault();
        });

        button.addEventListener('click', () => {
            const isActive = button.classList.toggle('is-active');
            button.setAttribute('aria-pressed', String(isActive));

            skillButtons.forEach((otherButton) => {
                if (otherButton !== button) {
                    otherButton.classList.remove('is-active');
                    otherButton.setAttribute('aria-pressed', 'false');
                }
            });
        });
    });
}


// =====================================
// 4. AUTOMATIC COPYRIGHT YEAR
// =====================================

const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}


// =====================================
// 4. PROJECT CAROUSEL
// =====================================

// Add your projects inside this array.

const projects = [

    {
        title: 'Project 1',

        image: 'project1.jpg',

        alt:
            'Project 1 illustration'
    },
    {
        title: 'Project 2',

        image: 'project2.jpg',

        alt:
            'Project 2 illustration'
    },
    {
        title: 'Project 3',

        image: 'project3.jpg',

        alt:
            'Project 3 illustration'
    },
    {
        title: 'Project 4',

        image: 'project4.jpg',

        alt:
            'Project 4 illustration'
    },
    {
        title: 'Project 5',

        image: 'project5.jpg',

        alt:
            'Project 5 illustration'
    },
    {
        title: 'Project 6',

        image: 'project6.jpg',

        alt:
            'Project 6 illustration'
    }

];


// Current project index

let currentProject = 0;


// Get HTML elements

const imageEl = document.getElementById('project-image');

const titleEl = document.getElementById('project-title');

showProject(0);


// =====================================
// 5. DISPLAY PROJECT
// =====================================

function showProject(index) {

    // Move to the selected project
    currentProject =
        (index + projects.length) % projects.length;

    const project = projects[currentProject];


    // Update project image
    imageEl.src = project.image;
    imageEl.style.objectPosition =
        project.image.includes('project4') || project.image.includes('profile')
            ? '50% 18%'
            : 'center';

    imageEl.alt = project.alt;


    // Update project title
    titleEl.textContent = project.title;

}


// =====================================
// 6. PREVIOUS PROJECT BUTTON
// =====================================

document.querySelector('.prev').addEventListener('click', () => {

    showProject(currentProject - 1);

});


// =====================================
// 7. NEXT PROJECT BUTTON
// =====================================

document.querySelector('.next').addEventListener('click', () => {

    showProject(currentProject + 1);

});