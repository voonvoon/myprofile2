const project = document.querySelector('.project-wrapper');
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [97,89,85,87,80,70,50];
const test = window.pageYOffset;

const projectDetails = [
    {
        name: 'Flickbase',
        technology: 'ReactJS/Express/JS/MongoDB',
        src: 'images/img1.jpg',
        href: 'https://flickbase84.herokuapp.com/',
        github:'https://github.com/voonvoon/flickbase'
    },
    
    {
        name: 'Guitar Store',
        technology: 'ReactJS/Express/JS/MongoDB',
        src: 'images/img2.jpg',
        href: 'https://waves220.herokuapp.com/',
        github:'https://github.com/voonvoon/waves'
        },

    {
        name: 'Wine House',
        technology: 'HTML/CSS/JS',
        src: 'images/project-3.jpg',
        href: 'https://www.youtube.com/watch?v=jtmuopTpzGE',
        github:'https://github.com/voonvoon/flickbase'
        },

    {
        name: 'Task Manager',
        technology: 'HTML/CSS/JS',
        src: 'images/project-4.jpg',
        href: 'https://www.youtube.com/watch?v=3J-EFMzz94g',
        github:'https://github.com/voonvoon/flickbase'
        },

    {
        name: 'The Road',
        technology: 'HTML/CSS/JS',
        src: 'images/project-5.jpg',
        href: 'https://www.youtube.com/watch?v=3J-EFMzz94g',
        github:'https://github.com/voonvoon/flickbase'
        },

    {
        name: 'Food Recipe App',
        technology: 'HTML/CSS/JS',
        src: 'images/project-6.jpg',
        href: 'https://www.youtube.com/watch?v=3J-EFMzz94g',
        github:'https://github.com/voonvoon/flickbase'
        },

    {
        name: 'Slideshow',
        technology: 'HTML/CSS/JS',
        src: 'images/project-7.jpg',
        href: 'https://www.youtube.com/watch?v=3J-EFMzz94g',
        github:'https://github.com/voonvoon/flickbase'
        },

    {
        name: 'Hamburger Menu',
        technology: 'HTML/CSS/JS',
        src: 'images/project-8.jpg',
        href: 'https://www.youtube.com/watch?v=3J-EFMzz94g',
        github:'https://github.com/voonvoon/flickbase'
        },

    {
        name: 'CSS Grid Menu',
        technology: 'HTML/CSS/JS',
        src: 'images/project-9.jpg',
        href: 'https://www.youtube.com/watch?v=3J-EFMzz94g',
        github:'https://github.com/voonvoon/flickbase'
        },
]

function createListItems(arr) {
    let item = '';
    for (let i = 0; i < arr.length; i++) {
        item += `
        <div class="project">
            <div class="project-text">
                <h2 class="project-name">${projectDetails[i].name}</h2>
                <h4 class="project-technologies">
                    ${projectDetails[i].technology}
                </h4>
            </div>
            <img src="${projectDetails[i].src}" class="project-img">
            <a href="${projectDetails[i].href}" class="project-link" target="_blank">Visit website</a>
            <a href="${projectDetails[i].github}" class="project-link-github" target="_blank">Go to Github</a>
        </div>`;
    }

    return item;
}

project.innerHTML = `${createListItems(projectDetails)}`;


// make navbar stick
window.addEventListener("scroll",()=>{
    mainFn();
})

const mainFn = () => {
    if(window.pageYOffset >= navbarOffsetTop ) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }

    //change navbar color to white
    sections.forEach((section, i)=>{
        if(window.pageYOffset >= section.offsetTop-10) {
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change')
            })
            navbarLinks[i].classList.add('change')
    }
});

if(window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll('.progress-percent').forEach((el, i) => {
        el.style.width = `${progressBarPercents[i]}%`;
        el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
    });
 }
}

mainFn()


//reload the page once we resize the window:
// window.addEventListener('resize', ()=>{
//     window.location.reload()
// })

//make progress bar work!

