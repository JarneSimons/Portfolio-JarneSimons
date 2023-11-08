const skills = [
    { image: "./images/html.svg", name: "HTML" },
    { image: "./images/css.svg", name: "CSS" },
    { image: "./images/javascript.svg", name: "JavaScript" },
    { image: "./images/php1.svg", name: "PHP" },
    { image: "./images/figma.svg", name: "Figma" },
    { image: "./images/illustrator.svg", name: "Illustrator" },
    // Add other skills here
];

let currentSkillIndex = 0;
const sliderBoxes = document.querySelectorAll('.sliderBox');
const secondBox = document.querySelector('.secondBox');
let intervalId;

function displaySkill() {
    sliderBoxes.forEach((box, index) => {
        const skill = skills[(currentSkillIndex + index) % skills.length];
        box.innerHTML = `<img src="${skill.image}" alt="${skill.name}" style="width: 100px; height: 100px;" />`;
    });
    currentSkillIndex = (currentSkillIndex + 1) % skills.length;
}

function startInterval() {
    intervalId = setInterval(displaySkill, 1500); // Change skills every 1.5 seconds
}

function stopInterval() {
    clearInterval(intervalId); // Clear the interval
    if (secondBox.classList.contains('hovered')) {
        secondBox.innerHTML = skills.map(skill => skill.name).join("<br>");
    } else {
        secondBox.innerHTML = skills.map(skill => `<img src="${skill.image}" alt="${skill.name}" style="width: 100px; height: 100px;" />`).join("<br>");
    }
}

displaySkill(); // Call the function initially
startInterval(); // Start the interval

secondBox.addEventListener('mouseenter', function() {
    secondBox.classList.add('hovered');
    stopInterval();
}); // Show names on mouse enter
secondBox.addEventListener('mouseleave', function() {
    secondBox.classList.remove('hovered');
    secondBox.innerHTML = '';
    displaySkill();
    startInterval(); // Restart the interval on mouse leave
});







// hamburger menu

function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.links');
    let isMenuOpen = false;

    console.log('clicked');
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        menuToggle.innerHTML = '✕'; // Unicode character for a cross
        links.classList.add('active');
    } else {
        menuToggle.innerHTML = '☰'; // Unicode character for a hamburger
        links.classList.remove('active');
    }
}

// Attach the event listener outside the toggleMenu function
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleMenu);